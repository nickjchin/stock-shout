const router = require('express').Router();
const { User, UserStock} = require('../models');
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
      include: [{ model: UserStock }],
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

// router.get('/searchresults', withAuth, async (req, res) => {
//   console.log("results page");
//   //console.log("stock id",req.body);
//   var client = new Twitter({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     bearer_token: process.env.TWITTER_BEARER_TOKEN,
//   });

//    try {
//     // 
//     const tweetData = await client.get("2/tweets/counts/recent", { q: "gme" }, function (error, tweets, response){ });

//     const tweetCount = tweetData.get({ plain: true });
//     console.log(tweetCount);
//     res.render('searchresult', {
//       ...tweetCount,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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