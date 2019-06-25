import mongoose from '../../libs/db/mongoose';

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  // we may want to associate the message with a user
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Message', messageSchema);

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
