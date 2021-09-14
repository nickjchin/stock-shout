const User = require("./User");
const Watchlist = require("./Watchlist");

User.hasOne(Watchlist, {
  foreignKey: "user_id",
  onDelete: 'Cascade'
});

Watchlist.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Watchlist };
