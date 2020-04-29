/**
 * @author Miguel Parra García
 * @description API de Express bajo CBD
 */
// Libs
const express = require("express");
const cors = require("cors");

// Components
const Place = require("./components/Place/Place");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/lugares", Place.api);

app.listen(3000, () => {
  // Set up
  console.log("Servidor corriendo en puesto 3000");
});
