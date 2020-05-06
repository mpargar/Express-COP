/**
 * Rutas de usuario
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const User = express.Router();

User.use(express.urlencoded({ extended: false }));
User.use(express.json());
User.use(cors());

module.exports = User;
