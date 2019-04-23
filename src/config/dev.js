const googleAPIKeys = {
  clientID: process.env.CLIENT_ID_DEV,
  clientSecret: process.env.CLIENT_SECRET_DEV,
  callbackURI: process.env.CALLBACK_URI,
}
const sessionKey = {
  cookieKey: process.env.COOKIE_KEY_DEV
}

const dbURL = process.env.DATABASE_URL_DEV

const stripeAPIKeys = {
  publishKey: process.env.STRIPE_PUB_KEY,
  secretKey: process.env.STRIPE_SECRET_KEY
}

const sendGridAPIKeys = process.env.SENDGRID_KEY;
const redirectDomain = process.env.REDIRECT_DOMAIN;

module.exports = {
  googleAPIKeys,
  sessionKey,
  stripeAPIKeys,
  dbURL,
  sendGridAPIKeys,
  redirectDomain
}