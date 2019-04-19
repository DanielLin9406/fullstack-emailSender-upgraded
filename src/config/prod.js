const googleAPIKeys = {
  clientID: process.env.CLIENT_ID_PROD,
  clientSecret: process.env.CLIENT_SECRET_PROD,
  callbackURI: process.env.CALLBACK_URI,
}
const sessionKey = {
  cookieKey: process.env.COOKIE_KEY_PROD
}

const dbURL = process.env.MONGODB_URI

const stripeAPIKeys = {
  publishKey: process.env.STRIPE_PUB_KEY,
  secretKey: process.env.STRIPE_SECRET_KEY
}

module.exports = {
  googleAPIKeys,
  sessionKey,
  stripeAPIKeys,
  dbURL
}