'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
    driver: DataTypes.BOOLEAN,
    car_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    long_rent: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Transaction.belongsTo(models.Car, {foreignKey: 'car_id'});
      }
    }
  });
  return Transaction;
};
