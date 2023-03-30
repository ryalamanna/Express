const express = require('express');
const router = express.Router();
const db = require('../db_config')

router.get('/view' , (req, res)=>{
    const sqlSelect = 'SELECT * FROM contact_db';
    db.query(sqlSelect , (error , result)=>{
        res.send(result)
        if(error){
            console.log(error);
        }
    });
});

router.post('/add' , (req, res)=>{
    const sqlInsert = 'INSERT INTO contact_db (name , email , contact) VALUES (? , ? , ?)';
    const {name , email , contact} = req.body;
    db.query(sqlInsert , [name , email , contact] , (error , result)=>{
        if(error){
            console.log(error);
        }
    });
});


router.delete('/delete/:id' , (req , res)=>{
    const {id} = req.params;
    const sqlDelete = 'DELETE FROM contact_db WHERE id = ?';
    db.query(sqlDelete , id , (error ,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send('successful')
        }
    })

});

router.get('/edit/:id' , (req , res)=>{
    const sqlSelect = 'SELECT name , email , contact from contact_db WHERE id = ?';
    const {id} = req.params;
    db.query(sqlSelect , id , (error , result)=>{
        res.send(result)
        if(error){
            console.log(error);
        }
    })
})

router.put('/edit/update/:id' , (req,res)=>{
    const {name , email , contact} = req.body;
    const sqlUpdate = 'UPDATE contact_db SET name = ? , email = ? , contact = ? WHERE id = ?';
    const {id} = req.params;
    // console.log(name , email , contact);
    db.query(sqlUpdate , [name , email , contact , id] , (error , result)=>{
        if(error){
            console.log(error);
        }
        res.send(result)
    });
});

module.exports = router;

