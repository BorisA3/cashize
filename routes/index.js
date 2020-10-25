// Improtar los modulos requeridos
const express = require("express");

// Configura y mantiene todo los endpoints en el servidor
const router = express.Router();

module.exports = () => {
    // Rutas disponibles
   router.get("/", (req, res, next) => {
        res.send("bienvenido");
    });

    return router;
}