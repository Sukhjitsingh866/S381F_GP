const assert = require('assert');
const express = require('express');

const app = express();


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