const express = require('express');
const bodyParser = require('body-parser');
const { consume, release, getArrLength } = require('./utils');

const app = express();

app.use(bodyParser.json())

app.post('/consume', function (req, res) {
    consume(req.body.size);
    console.log('consumed', req.body.size);
    res.send('ok');
});

app.post('/release', function (req, res) {
    release(req.body.size);
    global.gc();
    console.log('released', req.body.size);
    res.send('ok');
});

app.get('/stats', function (req, res) {
    res.send({
        length: getArrLength()
    });
});

app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`));