const express = require("express");
const registroControl = require("../control/registroControl");

var api = express.Router();


//Ruta Insertar Registros
api.post("/", registroControl.insertarRegistro);
//Ruta Modificar Registros
api.get("/", registroControl.modificarRegistro);
//Ruta Listar Registros
api.put("/:id", registroControl.listarRegistro);
//Ruta Eliminar Registros
api.delete("/:id", registroControl.eliminarRegistro);

module.exports = api;   