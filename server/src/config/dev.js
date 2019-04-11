const googleAPIKeys = {
  clientID: process.env.CLIENT_ID_DEV,
  clientSecret: process.env.CLIENT_SECRET_DEV,
  callbackURI: process.env.CALLBACK_URI,
}
const sessionKey = {
  cookieKey: process.env.COOKIE_KEY_DEV
}

const dbURL = process.env.DATABASE_URL_DEV

module.exports = {
  googleAPIKeys,
  sessionKey,
  dbURL
}