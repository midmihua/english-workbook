import mongoose from 'mongoose';
import { MONGODB, ROLES } from '../utils/constants.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: ROLES.GUEST,
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model(MONGODB.MODEL.USER, userSchema);
