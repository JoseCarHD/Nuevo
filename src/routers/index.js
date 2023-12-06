const express = require('express');
const router = express.Router();
const Paciente = require("../models/datos");

router.get('/', async (req, res) => {
    try {
        const datos = await Paciente.find();
        console.log("Los datos son: ", datos);
        res.render('index.ejs', {
            datos
        });
    } catch (error) {
        console.error("Error al obtener datos:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.post('/add', async (req, res) => {
    try {
        const expediente = new Paciente(req.body);
        console.log(req.body);
        await expediente.save();
        res.redirect('/');
    } catch (error) {
        console.error("Error al agregar datos:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.get('/del/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await Paciente.findByIdAndRemove(id);
        res.redirect('/');
    } catch (error) {
        console.error("Error al eliminar datos:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.post('/upd/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const datos = req.body;

        await Paciente.findByIdAndUpdate(id, datos);
        res.redirect('/');
    } catch (error) {
        console.error("Error al actualizar datos:", error);
        res.status(500).send("Error interno del servidor");
    }
});

module.exports = router;
