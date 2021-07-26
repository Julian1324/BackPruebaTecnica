const express= require('express');
const router= express.Router();

const pool = require('../database');
router.get('/', (req , res) => {
    res.send('Hello word');
});

router.get('/productos', async (req , res) => {
    
    var productos=await pool.query(`SELECT * from productos`);
    // console.log(productos);
    res.status(200).send(productos);
});

router.post('/productos/:name/:descripcion/:costo/:precioventa', async (req , res) => {
    
    var productos=await pool.query(`INSERT INTO productos (nombre_producto,descripcion,costo,precio_venta) VALUES ('${req.params.name}','${req.params.descripcion}','${req.params.costo}','${req.params.precioventa}')`);
    res.status(200);
});

module.exports= router;