import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const dBUrl = process.env.DATABASE_URL
const opts = { useNewUrlParser: true };

const connectDb = () => {
  return mongoose.connect(dBUrl, opts);
};

const models = { User, Message };

export { connectDb };
export default models;

// let users = {
//   1: {
//     id: '1',
//     username: 'Robin Wieruch',
//   },
//   2: {
//     id: '2',
//     username: 'Dave Davids',
//   },
// };

// let messages = {
//   1: {
//     id: '1',
//     text: 'Hello World',
//     userId: '1',
//   },
//   2: {
//     id: '2',
//     text: 'By World',
//     userId: '2',
//   },
// };

// export default {
//   users,
//   messages,
// };