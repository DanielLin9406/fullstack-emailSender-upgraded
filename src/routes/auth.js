const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleAPIKeys = require('../config/keys').googleAPIKeys;

router.get('/google', 
  passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get(googleAPIKeys.callbackURI, 
  passport.authenticate('google')
)

router.get('/current_user', (req, res) => {
  console.log(req.user)
  res.send(req.user)
})

module.exports = router;