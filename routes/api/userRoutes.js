const router = require('express').Router();
const { User, Watchlist } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [{ model: Watchlist }],
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });