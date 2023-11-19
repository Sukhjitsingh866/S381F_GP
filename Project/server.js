const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('cookie-session');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const mongourl = 'mongodb://your-mongodb-url'; // Replace with your MongoDB connection URL
const dbName = 'Cart';

// Start of hello world
app.get('/', function(req, res) {
  res.send('Hello, world!');
});

// Login database
var logininfo = [
  { name: 'houdini', password: 'abracadabra' }
];

// Additional code goes here...

app.listen(process.env.PORT || 8099);