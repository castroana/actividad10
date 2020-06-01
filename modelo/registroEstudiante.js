const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registroSchema = new Schema({
    NombreEstudiante: String,
    Facultad: String,
    EstadoEstudiante: String,
})

module.exports = mongoose.model("Registro", registroSchema)