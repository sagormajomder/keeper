import passport from 'passport';
import passportJWT from 'passport-jwt';
import { UserModel } from '../models/user.model.js';

const JwtStrategy = passportJWT.Strategy,
  ExtractJwt = passportJWT.ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const user = await UserModel.findOne({
        _id: jwt_payload.id,
      });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(err, false);
    }
  })
);
