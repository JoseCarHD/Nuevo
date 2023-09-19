const express = require('express');
const router = express.Router();
const mode1 = require("../models/datos")();
const Paciente = require("../models/datos");

router.get('/', async (req,res) =>{
    const datos = await Paciente.find();
    console.log("Los datos son: ".datos);
    res.render('index.ejs',{
        datos
    });
});

router.post('/add', async (req, res) =>{
    const expediente = new Paciente(req.body);
    console.log(req.body);
    await expediente.save();
    res.redirect('/');
});

router.get('/del/:id', async(req,res)=>{
    const {id}= req.params;
    await Paciente.findByIdAndRemove(id);
    res.redirect('/');
});

module.exports = router;