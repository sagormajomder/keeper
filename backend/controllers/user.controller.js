import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model.js';

const saltRounds = 10;
// Register User
export async function registerUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: 'User already existed',
      });
    }

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const newUser = await UserModel({
        email,
        password: hash,
      }).save();

      return res.status(201).json({
        success: true,
        message: 'Successfully user is created',
        user: {
          id: newUser._id,
          email: newUser.email,
        },
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}

// Login User
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User is not found',
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: 'User email or password is incorrect',
      });
    }

    // JWT
    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '2d',
    });

    return res.status(200).json({
      success: true,
      message: 'Successfully user is logged',
      token: 'Bearer ' + token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}

// Entering App

export function getApp(req, res) {
  return res.status(200).send({
    success: true,
    user: {
      id: req.user._id,
      email: req.user.email,
    },
  });
}
