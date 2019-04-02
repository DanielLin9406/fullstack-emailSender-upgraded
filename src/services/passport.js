import passport from 'passport';
import mongoose from 'mongoose';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { googleAPIKeys } from '../config/keys';

const User = mongoose.model('User');

const findExistingUser = async (profile) => {
  return await User.findOne({ googleId: profile.id });
}

const passportCB = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await findExistingUser(profile);
  if (existingUser) {
    return done(null, existingUser)
  } else {
    return done(null, await new User({ googleId:profile.id }).save())
  }
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: googleAPIKeys.clientID,
  clientSecret: googleAPIKeys.clientSecret,
  callbackURL: googleAPIKeys.callbackURI
}, passportCB));
