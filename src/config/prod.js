const googleAPIKeys = {
  clientID: process.env.CLIENT_ID_PROD,
  clientSecret: process.env.CLIENT_SECRET_PROD,
  callbackURI: process.env.CALLBACK_URI,
}
const sessionKey = {
  cookieKey: process.env.COOKIE_KEY_PROD
}

const dbURL = process.env.DATABASE_URL_PROD

module.exports = {
  googleAPIKeys,
  sessionKey,
  dbURL
}