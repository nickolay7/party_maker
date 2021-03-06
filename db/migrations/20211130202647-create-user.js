'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      interes_1: {
        type: Sequelize.STRING,
      },
      interes_2: {
        type: Sequelize.STRING,
      },
      interes_3: {
        type: Sequelize.STRING,
      },
      drink: {
        type: Sequelize.BOOLEAN,
      },
      one_night: {
        type: Sequelize.BOOLEAN,
      },
      relationship: {
        type: Sequelize.BOOLEAN,
      },
      find_friends: {
        type: Sequelize.BOOLEAN,
      },
      social_networks: {
        type: Sequelize.STRING,
      },
      communication: {
        type: Sequelize.BOOLEAN,
      },
      smoking: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Users');
  }
};
