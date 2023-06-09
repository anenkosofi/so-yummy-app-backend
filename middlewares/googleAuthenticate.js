const passport = require("passport"); 
const { Strategy } = require("passport-google-oauth2"); 
const { User } = require("../models"); 
const brcypt = require('bcryptjs'); 
const {v4: uuidv4 } = require('uuid');


const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env; 
const BASE_URL = "http://localhost:8080";

const googleParams = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASE_URL}/api/users/google/callback`,
    passReqToCallback: true,
}; 

const googleCallback = async (req, accessToken, refreshToken, profile, done) => {
    try {
        const { email, displayName } = profile;
        const user = await User.findOne({ email });
        if (user) {
            return done(null, user)
        }
        const password = await brcypt.hash(uuidv4(), 10);
        const newUser = await User.create({ name: displayName, email, password });
        done(null, newUser);

    
    } catch (error) {
        done(error, false);
    }
}; 

const googleStrategy = new Strategy(googleParams, googleCallback); 

passport.use('google', googleStrategy); 

module.exports = passport; 