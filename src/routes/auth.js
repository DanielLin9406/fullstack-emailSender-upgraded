import authRouter from './enrichRouter';
import passport from '../services/passport';

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// Because passport is also a middleware
authRouter.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/surveys');
  }
);

export default authRouter;
