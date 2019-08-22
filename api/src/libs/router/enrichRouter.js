import { Router } from 'express';
import cors from 'cors';
import passport from '../auth/passport';

const router = Router();
const enrichRouter = createEnrichRouter(passport);

function createEnrichRouter(passport) {
  router.use(cors('*'));
  router.use(passport.initialize());
  router.use(passport.session());
  return router;
}

export default enrichRouter;
