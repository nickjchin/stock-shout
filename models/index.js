const User = require("./User");
const Stock = require("./Stock");

User.hasMany(Stock, {
  foreignKey: "",
});

module.exports = { User, Stock };
