import authRouter from '../../libs/router/enrichRouter';
import passport from '../../libs/auth/passport';
import keys from '../../config/keys';

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
    res.redirect(`/surveys`);
  }
);

export default authRouter;
