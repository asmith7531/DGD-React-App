'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hazmat = sequelize.define('Hazmat', {
    unNum: DataTypes.STRING,
    techName: DataTypes.STRING,
    hazClass: DataTypes.INTEGER,
    packingInstruction: DataTypes.INTEGER
  }, {});
  Hazmat.associate = function(models) {
    // associations can be defined here
  };
  return Hazmat;
};