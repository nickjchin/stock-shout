const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Watchlist extends Model {}

Watchlist.init(
  {
    stocks: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      },

    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "watchlist",
  }
);

module.exports = Watchlist;
