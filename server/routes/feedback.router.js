const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT id, feeling, understanding, support, comments, flagged, date FROM "feedback" ORDER BY "id" DESC;`).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('ERROR GET /feedback ', err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    let newEntry = req.body;
    console.log('ADDING NEW ENTRY', newEntry);
    console.log(newEntry.feel, "testing");
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
                    
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newEntry.feel, newEntry.understand, newEntry.support, newEntry.comment])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`ERROR adding new entry`, error);
            res.sendStatus(500);
        });
});

module.exports = router;