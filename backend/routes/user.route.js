import express from 'express';
import passport from 'passport';
import '../config/passport.js';

import {
  getApp,
  loginUser,
  registerUser,
} from '../controllers/user.controller.js';

export const userRouter = express.Router();

// Register User
userRouter.post('/register', registerUser);

// Login User
userRouter.post('/login', loginUser);

// App Route
userRouter.get(
  '/app',
  passport.authenticate('jwt', { session: false }),
  getApp
);
