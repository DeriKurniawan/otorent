'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.hasMany(models.Car, {foreignKey: 'car_id'})
      }
    }
  });
  return Category;
};
