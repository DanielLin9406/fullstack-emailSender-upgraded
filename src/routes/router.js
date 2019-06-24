import { Router } from 'express';
const router = Router();

function createEnrichRouter(passport) {
  router.use(passport.initialize());
  router.use(passport.session());
  return router;
}

export default createEnrichRouter;
