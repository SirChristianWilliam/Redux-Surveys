const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const feedbackRouter = require('./routes/feedback.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/feedback', feedbackRouter);

/** ---------- START SERVER ---------- **/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});