'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organizerId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      location_details: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      date_departure: {
        type: Sequelize.DATE
      },
      date_back: {
        type: Sequelize.DATE
      },
      destination: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      have_tours: {
        type: Sequelize.BOOLEAN
      },
      have_lunch: {
        type: Sequelize.BOOLEAN
      },
      have_dinner: {
        type: Sequelize.BOOLEAN
      },
      have_breakfast: {
        type: Sequelize.BOOLEAN
      },
      have_tours: {
        type: Sequelize.BOOLEAN
      },
      have_wifi: {
        type: Sequelize.BOOLEAN
      },
      have_pool: {
        type: Sequelize.BOOLEAN
      },
      have_air: {
        type: Sequelize.BOOLEAN
      },
      have_guide: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trips');
  }
};