const mongoose = require('../../../libs/db/mongoose').default;
const { googleId } = require('../const');

const User = mongoose.model('User');

const findExistingUser = async googleId => {
  return await User.findOne({ googleId });
};

module.exports = async () => {
  const existingUser = await findExistingUser(googleId);
  if (existingUser) {
    return existingUser;
  } else {
    return await new User({ googleId }).save();
  }
};
