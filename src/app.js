require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const schema = require('./models')
const models = schema.models;
const connectDb = schema.connectDb;
const sessionKey = require('./config/keys');
require('./services/passport');
const routes = require('./routes');
const passport = require('passport');

const eraseDatabaseOnSync = false;
const app = express();
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

// app.use(async (req, res, next) => {
//   req.context = {
//     models,
//     me: await models.User.findByLogin('rwieruch'),
//   };
//   next();
// });

app.use('/auth', routes.auth);
app.use('/session', routes.session);
app.use('/user', routes.user);
app.use('/messages', routes.message);

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

// const createUsersWithMessages = async () => {
//   const user1 = new models.User({
//     username: 'rwieruch',
//   });

//   const user2 = new models.User({
//     username: 'ddavids',
//   });

//   const message1 = new models.Message({
//     text: 'Published the Road to learn React',
//     user: user1.id,
//   });

//   const message2 = new models.Message({
//     text: 'Happy to release ...',
//     user: user2.id,
//   });

//   const message3 = new models.Message({
//     text: 'Published a complete ...',
//     user: user2.id,
//   });

//   await message1.save();
//   await message2.save();
//   await message3.save();

//   await user1.save();
//   await user2.save();
// };

module.exports = app;

// app.listen(3000, () =>
//   console.log(`Example app listening on port ${process.env.PORT}!`),
// );

// app.get('/session', (req, res) => {
//   return res.send(req.context.models.users[req.context.me.id]);
// });

// app.get('/users', (req, res) => {
//   return res.send(Object.values(req.context.models.users));
// });

// app.get('/users/:userId', (req, res) => {
//   return res.send(req.context.models.users[req.params.userId]);
// });

// app.get('/messages', (req, res) => {
//   return res.send(Object.values(req.context.models.messages));
// });

// app.get('/messages/:messageId', (req, res) => {
//   return res.send(req.context.models.messages[req.params.messageId]);
// });

// app.post('/users', (req, res) => {
//   return res.send(Object.values(req.context.models.users));
// });

// app.post('/messages', (req, res) => {
//   const id = uuidv4();
//   const message = {
//     id,
//     text: req.body.text,
//     userId: req.context.me.id,
//   };

//   req.context.models.messages[id] = message;

//   return res.send(message);
// });


// app.put('/users/:userId', (req, res) => {
//   return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
// });

// app.delete('/users/:userId', (req, res) => {
//   return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
// });

// app.delete('/messages/:messageId', (req, res) => {
//   const {
//     [req.params.messageId]: message,
//     ...otherMessages
//   } = req.context.models.messages;

//   req.context.models.messages = otherMessages;

//   return res.send(message);
// });

