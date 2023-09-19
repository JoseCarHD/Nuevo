const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Paciente = new Schema({
    Nombre: String,
    Apellido_Paterno: String,
    Apellido_Materno: String,
    Fecha_Nac: String
});

module.exports = mongoose.model('datos', Paciente);