const express= require('express');
const router= express.Router();

const pool = require('../database');

router.post('/signup', async (req , res) => {
    
    await pool.query(`INSERT INTO usuarios (nombre,correo,contrasena) VALUES ('${req.query.name}','${req.query.correo}','${req.query.password}')`).then(res.sendStatus(200));
    
});

router.get('/login', async (req , res) => {
    var user= await pool.query(`SELECT nombre, contrasena FROM usuarios WHERE nombre = '${req.query.name}'`);
    user= user[0];

    if(user===undefined){
        res.sendStatus(404);
    }else{
        res.send(user);
    }

    //res.json(user);
});

module.exports= router;