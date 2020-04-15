/**
 * Rutas de Lugares
 */
// Libs
const express = require("express");
const cors = require("cors");

const Place = express.Router();
Place.use(express.urlencoded({ extended: false }));
Place.use(express.json());
Place.use(cors());

Place.get("/", (req, res) => {
  res.status(200).json({
    message: "Metodo get",
  });
});

Place.post("/", (req, res) => {
  res.status(200).json({
    message: "Metodo post",
  });
});

Place.put("/", (req, res) => {
  res.status(200).json({
    message: "Metodo put",
  });
});

Place.delete("/", (req, res) => {
  res.status(200).json({
    message: "Metodo delete",
  });
});

module.exports = Place;
