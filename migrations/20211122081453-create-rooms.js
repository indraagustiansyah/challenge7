'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      playerone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      playertwo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pointone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default:0,
      },
      pointtwo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default:0,
      },
      pilihan1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pilihan2: {
        type: Sequelize.STRING,
        allowNull: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('create-rooms');
  }
};