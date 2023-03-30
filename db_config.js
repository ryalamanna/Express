const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root' ,
    password: 'Qmzpal123###',
    database: 'crud_contact'
})

db.getConnection((err)=>{
    if(err){
        console.log('error');
    }
    else{
        console.log('connected')
    }
})

module.exports = db;