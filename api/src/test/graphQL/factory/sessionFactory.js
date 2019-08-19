const { Buffer } = require('safe-buffer');
const Keygrip = require('keygrip');

const { sessionKey } = require('../../../config/keys');
const keygrip = new Keygrip([sessionKey.cookieKey]);

module.exports = user => {
  const sessionObject = {
    passport: {
      user: user._id.toString()
    }
  };

  const session = Buffer.from(JSON.stringify(sessionObject)).toString('base64');

  const sig = keygrip.sign('express:sess=' + session);

  return {
    session,
    sig
  };
};
