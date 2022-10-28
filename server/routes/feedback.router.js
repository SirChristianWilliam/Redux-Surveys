const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req,res) => {
    pool.query(`SELECT id, feeling, understanding, support, comments, flagged, date FROM "feedback";`).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('ERROR GET /feedback ', err);
        res.sendStatus(500);
    })
});



module.exports = router;