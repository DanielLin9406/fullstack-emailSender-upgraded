import passport from '../auth/passport';
import { Router } from 'express';

const router = Router();
const enrichRouter = createEnrichRouter(passport);

function createEnrichRouter(passport) {
  router.use(passport.initialize());
  router.use(passport.session());
  return router;
}

export default enrichRouter;
