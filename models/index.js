const User = require("./User");
const UserStock = require("./UserStock");
const Stock = require("./Stock")

User.hasMany(UserStock, {
  foreignKey: "user_id",
  onDelete: 'Cascade'
});

UserStock.belongsTo(User, {
  foreignKey: 'user_id',
  foreignKey: 'stock_id'
});

Stock.hasMany(UserStock,{
  foreignKey: "stock_id",
  onDelete: 'Cascade'
})
module.exports = { User, UserStock, Stock };
