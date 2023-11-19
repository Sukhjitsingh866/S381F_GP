const assert = require('assert');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


const mongourl = ''; 
const dbName = 'Cart';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('cookie-session');



//login database
var logininfo = new Array(
    {name: "houdini", password: "abracadabra"},
);





//ustab does the rest



app.listen(app.listen(process.env.PORT || 8099));