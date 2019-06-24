const passport = require('passport');
const googleAPIKeys = require('../../config/keys').googleAPIKeys;

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Because passport is also a middleware
  app.get(
    googleAPIKeys.callbackURI,
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // cookie-session 把 session從cookie 當中encode並放到 req.session
  // passport 存取 req.session 的資訊繼續deserialize
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
