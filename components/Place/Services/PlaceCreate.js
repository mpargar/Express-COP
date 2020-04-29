/*
  Esta función crea un nuevo lugar en la base de datos.
  @param [object] data
  @param [string] data.name
  @param [string] data.image
  @param [string] data.lat
  @param [string] data.lon
  @param [string] data.description
*/
const dal = require("../PlaceDAL");

module.exports = ({ name, image, lat, lon, description }, res) => {
  if (name && image && lat && lon && description) {
    dal.create({
      name,
      image,
      lat,
      lon,
      description,
    });
    res.status(200).json({
      message: "Lugar creado",
    });
  } else {
    res.status(400).json({
      message: "No se enviaron correctamente los parametros.",
      parameters: ["name", "image", "lat", "lon", "description"],
    }); // Bad Request
  }
};
