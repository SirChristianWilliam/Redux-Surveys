const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query // I'm accessing "data" from the database, but I elected not to display it, it seemed unnecessary. Hope that's fine.
    (`SELECT id, 
    feeling,  
    understanding, 
    support, 
    comments, 
    flagged, 
    to_char(date AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS date
    FROM "feedback" 
    ORDER BY "id" DESC;`)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('ERROR GET /feedback ', err);
            res.sendStatus(500);
        })
});
//POST for adding new data
router.post('/', (req, res) => {
    let newEntry = req.body;
    console.log('ADDING NEW ENTRY', newEntry);
    console.log(newEntry.feel, "testing");
    let queryText =
        `INSERT INTO "feedback" 
        ("flagged","feeling", "understanding", "support", "comments" )
        VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newEntry.flagged, newEntry.feel, newEntry.understand, newEntry.support, newEntry.comment])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`ERROR adding new entry`, error);
            res.sendStatus(500);
        });
});
router.delete('/:id', (req, res) => {
    console.log('params id is', req.params.id);
    pool.query(`DELETE FROM "feedback" WHERE "id" = $1`, [req.params.id])
        .then((res) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('ERROR in DELETE /:id', err);
            res.sendStatus(500);
        })
});
router.put('/:id', (req, res) => {
    let rowId = req.params.id;
    let tOf = req.body.flagged; //tOf is my variable acronymn for 'true or false'
    const queryText =
        `UPDATE "feedback" 
         SET "flagged" = $1
        WHERE "id" = $2;`; //Apparently $2 was needed instead of $1 to activate the toggle ability
    let queryArg = [
        tOf,
        rowId
    ];
    pool.query(queryText, queryArg)
        .then(dbRes => res.sendStatus(201))
        .catch(err => {
            console.log('ERROR in PUT,', err)
            res.sendStatus(500);
        });
});

module.exports = router;