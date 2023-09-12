const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const Paciente = new Schema({
    nombre: String,
    apellido_pat: String,
    appelido_mat: String,
    fecha_nac: String
});

module.exports =  mongoose.mode1('datos', Paciente);