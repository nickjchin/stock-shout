const withAuth = (req, res, next) => {
  console.log("with auth:", req.session.logged_in )
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
