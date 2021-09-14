const sequelize = require('../config/connection');
const { User, Watchlist } = require('../models');

const userSeedData = require('./userData.json');
const watchlistSeedData = require('./watchlistData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const watchlist of watchlistSeedData) {
   await Watchlist.create({
      ...watchlist,
      // Attach a random driver ID to each car
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
