import passport from '../services/passport';
import createEnrichRouter from '../routes/router';

const enrichRouter = createEnrichRouter(passport);

export default enrichRouter;
