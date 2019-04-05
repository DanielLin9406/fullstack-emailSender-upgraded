require('dotenv/config');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
const sessionKey = require('./config/keys');
const eraseDatabaseOnSync = false;
const schema = require('./models')
require('./models/user');
const models = schema.models;
const connectDb = schema.connectDb;
require('./services/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// encrypt keys, allowed multiple keys which could be random picked by 
app.use(cookieSession({
  maxAge: 30*24*60*60*1000, 
  keys: [sessionKey.cookieKey] 
}))
// Make use of cookie to handle authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app)
// require('./routes').user(app)
// require('./routes').message(app)

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    // createUsersWithMessages();
  }
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

module.exports = app;