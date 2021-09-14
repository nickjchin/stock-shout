const User = require("./User");
const Watchlist = require("./Watchlist");

User.hasOne(Watchlist, {
  foreignKey: "user_id",
  onDelete: 'Cascade',
});

module.exports = { User, Watchlist };
