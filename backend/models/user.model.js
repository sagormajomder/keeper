import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, trim: true, required: true },
    password: { type: String, trim: true, required: true },
  },
  { versionKey: false }
);

export const UserModel = mongoose.model('users', UserSchema);
