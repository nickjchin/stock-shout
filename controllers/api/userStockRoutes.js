const router = require('express').Router();
const { UserStock, Stock } = require('../../models');


 // GET all stocks
 router.get('/', async (req, res) => {
  try {
    const stockData = await Stock.findAll();
    
    res.status(200).json(stockData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one specific stock info
router.get('/:id', async (req, res) => {
  try {
    const stockData = await Stock.findByPk(req.params.id, {
  
    });

    if (!stockData) {
      res.status(404).json({ message: 'No stock found with that id!' });
      return;
    }
    req.session.save(() => {
      req.session.stock_id = stockData.id;

    res.status(200).json(stockData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//CREATE new stock watchlist entry
router.post('/', async (req, res) => {
  try {
    const userStockData = await UserStock.create({
      user_id: req.session.user_id,
      stock_id: req.session.stock_symbol,
    });

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(userStockData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a stock watchlist entry
router.delete('/:id', (req, res) => {
  // Looks for the watchlist based on id given in the request parameters and deletes the instance from the database
  UserStock.destroy({
    where: {
      user_id: req.session.user_id,
      stock_id: req.params.id,
    },
  })
    .then((deletedUserStock) => {
      res.json(deletedUserStock);
    })
    .catch((err) => res.json(err));
    console.log(err);
});

module.exports = router;
