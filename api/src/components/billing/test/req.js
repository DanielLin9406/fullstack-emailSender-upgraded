const keys = require('../../../config/keys');
// const stripe = require('stripe')(keys.stripeAPIKeys.secretKey);
const createReq = require('../../../test/graphQL/helper/createReq');

exports.createCredit = async ({ cookie }) => {
  const variable = {
    token: 'tok_visa'
  };
  const postData = {
    string: `mutation($token:String!){
      createCredit(tokenId:$token){
        credits
      }
    }`,
    variable
  };

  return await createReq({ postData, cookie });
};
