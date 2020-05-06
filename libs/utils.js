const bcrypt = require("bcrypt");
const privateKey = require("./privateKey.js");
module.exports = {
  /**
   * Esta funcion encripta contraseñas
   * @param {String} password
   * @returns {String} encripted password
   * */
  hashPassword: (password) => bcrypt.hashSync(password, 10),
  /**
   * Esta funcion verifica que una contraseña esta encriptada o no
   * @param {String} plaintTextPassword Contraseña sin encriptar
   * @param {String} encryptedPassword Contraseña encriptada
   * @returns {Boolean}
   * */
  verifyPassword: (plaintTextPassword, encryptedPassword) =>
    bcrypt.compareSync(plaintTextPassword, encryptedPassword),
};
