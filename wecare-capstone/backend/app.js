const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors")
//const myReqLogger = require('./Utilities/requestLogger');
const route = require('./Routes/routing');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyparser.json());
//app.use(myReqLogger);
app.use('/', route);


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
