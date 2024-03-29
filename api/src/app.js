import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import keys from './config/keys';
import { connectDb } from './libs/db/mongoose';
import user from './components/user';
import auth from './components/auth';
import billing from './components/billing';
import survey from './components/survey';
// Must after Mongoose User schema has been registered.
import passport from './libs/auth/passport';

const app = express();
const eraseDatabaseOnSync = false;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.sessionKey.cookieKey]
  })
);

// Must after cookieSession
// Extend passport to app level from router level
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth.authAPI);
app.use('/v1', user.userAPI);
app.use('/v1', billing.billingAPI);
app.use('/v1', survey.surveyAPI);

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      user.userModel.deleteMany({})
      // models.Message.deleteMany({})
    ]);

    // createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

export { bodyParser };
export default app;
