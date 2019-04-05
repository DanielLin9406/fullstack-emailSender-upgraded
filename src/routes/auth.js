const passport = require('passport');
const googleAPIKeys = require('../config/keys').googleAPIKeys;

module.exports = (app) => {
  app.get('/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
  }))
  
  app.get(googleAPIKeys.callbackURI, 
    passport.authenticate('google')
  )
  
  app.get('/auth/current_user', (req, res) => {
    console.log(req.user)
    res.send(req.user)
  })
}