const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text:{
    type: String,
    required: true
  },
  // we may want to associate the message with a user
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Message', messageSchema);
