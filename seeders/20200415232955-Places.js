"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "places",
      [
        {
          name: "UABCS",
          image: "",
          lat: 24.105836,
          lon: -110.320266,
          description: "Universidad Autónoma de Baja California Sur",
        },
        {
          name: "Galerías La Paz",
          image: "",
          lat: 24.1175948,
          lon: -110.3376609,
          description: "Centro comercial",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("places", null, {});
  },
};
