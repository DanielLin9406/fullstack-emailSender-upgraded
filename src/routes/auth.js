import { Router } from 'express';
import passport from 'passport';
import { googleAPIKeys } from '../config/keys';

const router = Router();

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

export default router;