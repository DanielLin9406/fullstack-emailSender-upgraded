const superagent = require('superagent');
const ql = require('superagent-graphql');
const API_URL = 'http://localhost:5000/graphql';

module.exports = async ({ postData, cookie }) => {
  let _req;
  if (cookie !== undefined) {
    const request = superagent.agent();
    _req = await request
      .post(API_URL)
      .use(ql(postData.string, postData.variable))
      .set('accept', 'application/json')
      .set('cookie', cookie);
  } else {
    const request = superagent.agent();
    _req = await request
      .post(API_URL)
      .use(ql(postData.string, postData.variable))
      .set('accept', 'application/json');
  }

  return _req;
};
