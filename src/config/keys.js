const googleAPIKeys = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURI: process.env.CALLBACK_URI,
}
const sessionKey = {
  cookieKey: process.env.COOKIE_KEY
}

module.exports = {
  googleAPIKeys,
  sessionKey
}