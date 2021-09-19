const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class UserStock extends Model {}

UserStock.init(
  {
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    stock_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stock',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userstock",
  }
);

module.exports = UserStock;
