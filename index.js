const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const users = require ('./routes/users')


// Middleware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users' , users)

app.listen(5000);
