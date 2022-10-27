var express = require('express');
var Query = require('./query');


var bodyParser = require('body-parser')
var path = require('path');

const app = express();
var cors = require('cors')
app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api',Query);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(4000)
module.exports =app;
