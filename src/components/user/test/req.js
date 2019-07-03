const createReq = require('../../../test/graphQL/helper/createReq');
const cookieFactory = require('../../../test/graphQL/factory/cookieFactory');

exports.currentUser = async () => {
  const cookie = await cookieFactory();
  const postData = {
    string: `query{
      currentUser {
        googleId
        credits
      }
    }`
  };
  return await createReq({ postData, cookie });
};
