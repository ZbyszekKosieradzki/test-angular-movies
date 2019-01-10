//nmp i express body-parser cors
//npm i -g nodemon

//node server.js
//nodemon server.js
//npm i cross-env
//DEBUG=vavatech:* nodemon server.js

const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const debug = require('debug');
const port = 3000;

const console={
  log: debug('vavatech:server')
}

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  console.log(req.method + ' ' + req.url)
  res.json({status:'ok', message:'welcome'});

});


app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({status:'ok', message:'data recived'});

});

app.listen(port, () => {
  console.log('server was start at localhost' + port);
});
