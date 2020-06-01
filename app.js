const express = require("express");
const cors = require("cors");
const app = express();

//Declarar rutas de la api
const registroRutas = require("./rutas/registroRutas")

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//Consumo de las rutas
app.use("/api", registroRutas)

module.exports = app;

