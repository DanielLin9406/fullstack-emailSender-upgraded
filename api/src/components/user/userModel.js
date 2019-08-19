import mongoose from '../../libs/db/mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

// set up hook to listen when a user has been removed
//  in case a user is deleted, we may want to perform a so called cascade delete for all messages in relation to the user.
userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

export default mongoose.model('User', userSchema);

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
