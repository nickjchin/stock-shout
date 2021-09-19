const sequelize = require('../config/connection');
const { User, Stock , UserStock} = require('../models');

const userSeedData = require('./userData.json');
const userStockSeedData = require('./userStockData.json');
const stockSeedData = require('./nyse-listed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  })

  const stocks = await Stock.bulkCreate(stockSeedData);
  
  for (const userStock of userStockSeedData) {
    await UserStock.create({
       ...userStock,
       user_id: users[Math.floor(Math.random() * users.length)].id,
       stock_id: stocks[Math.floor(Math.random() * stocks.length)].id,
     });
   };
 

  process.exit(0);
};

seedDatabase();
