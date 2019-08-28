const userFactory = require('./userFactory');
const sessionFactory = require('./sessionFactory');

module.exports = async () => {
  const user = await userFactory();
  const { session, sig } = sessionFactory(user);
  const cookie = `express:sess=${session};express:sess.sig=${sig}`;
  return cookie;
};
