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

app.use('/auth', auth.authAPI);
app.use('/api', user.userAPI);
app.use('/api', billing.billingAPI);
app.use('/api', survey.surveyAPI);

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      user.userModel.deleteMany({})
      // models.Message.deleteMany({})
    ]);

    // createUsersWithMessages();
  }

  if (process.env.NODE_ENV === 'production') {
    // express.static(path.resolve(__dirname, '../..')
    // res.sendFile('index.html', {root : path.resolve(__dirname, '..')})
    const path = require('path');
    app.use(express.static(path.resolve('client/build')));
    app.get('*', (req, res) => {
      res.sendFile('client/build/index.html', {
        root: path.resolve(__dirname, '..')
      });
      // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

export { bodyParser };
export default app;
