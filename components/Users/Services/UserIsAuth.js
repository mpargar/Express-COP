/**
 * Esta función genera un token a un usuario autentico.
 * @param {object} data
 * @param {string} data.token
 */
const dal = require("../UserDAL");
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../../../libs/utils");
module.exports = (req, res) => {
  const token = req.headers["authorization"];
  let status = 500;
  let response = {
    message: "El usuario no es autentico.",
  };
  if (token) {
    try {
      const verify = jwt.verify(token, jwtConfig.privateKey);
      status = 200;
      response = {
        verify,
      };
    } catch (err) {}
  }
  res.status(status).json(response);
};
