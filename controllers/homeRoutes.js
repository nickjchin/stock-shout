const router = require('express').Router();
const { User, UserStock,Stock} = require('../models');
const withAuth = require('../utils/auth');

// var Twitter = require('twitter');

router.get('/', async (req, res) => {
 
    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {
  console.log("profile page");
  console.log("session id",req.session.user_id );

  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: UserStock}],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchresults', async (req, res) => {
  console.log("Search results");
  console.log('Stock ID: ',req.session.stock_id)
try{
  const stockData = await Stock.findByPk(req.session.stock_id, {
  });

  const stock = stockData.get({ plain: true });
    console.log(stock);
    res.render('searchresults', {
      ...stock,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('profile');
    return;
  }

  res.render('signup');
});



module.exports = router;