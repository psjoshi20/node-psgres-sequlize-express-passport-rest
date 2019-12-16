'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donations = sequelize.define('Donations', {
    amount: DataTypes.INTEGER,
    campaignId: DataTypes.INTEGER,
    sourceId: DataTypes.INTEGER,
    donationDate: DataTypes.DATE,
    donorId: DataTypes.INTEGER
  }, {});
  Donations.associate = function(models) {
    // associations can be defined here
  };
  return Donations;
};