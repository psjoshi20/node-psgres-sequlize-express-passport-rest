'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donors = sequelize.define('Donors', {
    Name: DataTypes.STRING,
    identifier: DataTypes.STRING,
    salutationId: DataTypes.INTEGER,
    contactNo: DataTypes.STRING,
    email: DataTypes.STRING,
    donorTypeId: DataTypes.INTEGER,
    donorFrequencyId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    donationStart: DataTypes.DATE,
    prefferedContactMode: DataTypes.INTEGER,
    doNotContact: DataTypes.BOOLEAN,
    idNo: DataTypes.INTEGER
  }, {});
  Donors.associate = function(models) {
    // associations can be defined here
  };
  return Donors;
};