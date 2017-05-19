var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static(path.join(__dirname,'public')));

app.post('/addData',function (req,res) {
    res.sendStatus(200);
});

app.listen(5000);