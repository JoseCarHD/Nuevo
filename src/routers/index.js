const express = require('express');
const router = express.Router();
const mode1 = require("../models/pacientes.js")();
const Paciente = require("../models/pacientes.js");

router.get('/', async (req,res) =>{
    const datos = await Paciente.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
});

module.exports = router;