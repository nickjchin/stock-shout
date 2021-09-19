const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userStockRoutes = require('./userStockRoutes');

router.use('/users', userRoutes);

router.use('/stocks', userStockRoutes);

module.exports = router;
