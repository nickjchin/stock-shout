const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stock extends Model {}

Stock.init(
  {
    stock: {
      type: DataTypes.STRING,
    references: {
        model: "user",
        key: "id",
    }, 
    num_tweets:{
        type: DataTypes.INTEGER,
    } 
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stock',
  }
);

module.exports = Stock;