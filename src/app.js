require('dotenv/config');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
const keys = require('./config/keys');
const connectDb = require('./models').connectDb;
const eraseDatabaseOnSync = false;
require('./models');
require('./services/passport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// encrypt keys, allowed multiple keys which could be random picked by 
app.use(cookieSession({
  maxAge: 30*24*60*60*1000, 
  keys: [keys.sessionKey.cookieKey] 
}))


// Make use of cookie to handle authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app)
require('./routes/billing')(app)
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

  // if (process.env.NODE_ENV === 'production'){
    // express.static(path.resolve(__dirname, '../..')
    // res.sendFile('index.html', {root : path.resolve(__dirname, '..')})
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  // }


  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

module.exports = app;