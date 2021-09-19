const router = require('express').Router();
const { UserStock, Stocks } = require('../../models');


 // GET all watchlists
 router.get('/', async (req, res) => {
  try {
    const userStockData = await UserStock.findAll({
      include: [{ model: Stocks}],
    });
    res.status(200).json(watchlistData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one specific watchlist
router.get('/:id', async (req, res) => {
  try {
    const stock = await Stock.findByPk(req.params.id, {
      include: [{ model: Stocks }],
    });

    if (!watchlistData) {
      res.status(404).json({ message: 'No watchlist found with that id!' });
      return;
    }

    res.status(200).json(watchlistData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//CREATE new watchlist
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
    });

    req.session.save(() => {
      req.session.logged_in = false;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a watchlist
router.delete('/:id', (req, res) => {
  // Looks for the watchlist based on id given in the request parameters and deletes the instance from the database
  Watchlist.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedWatchlist) => {
      res.json(deletedWatchlist);
    })
    .catch((err) => res.json(err));
    console.log(err);
});

module.exports = router;
