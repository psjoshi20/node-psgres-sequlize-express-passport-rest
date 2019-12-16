'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Donors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      identifier: {
        type: Sequelize.STRING
      },
      salutationId: {
        type: Sequelize.INTEGER
      },
      contactNo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      donorTypeId: {
        type: Sequelize.INTEGER
      },
      donorFrequencyId: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      donationStart: {
        type: Sequelize.DATE
      },
      prefferedContactMode: {
        type: Sequelize.INTEGER
      },
      doNotContact: {
        type: Sequelize.BOOLEAN
      },
      idNo: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Donors');
  }
};