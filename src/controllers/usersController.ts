import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import 'express-async-handler';
import { TermModel } from '../models/Term.js';
import { UserModel } from '../models/User.js';

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserModel.find().select('-password').lean();

  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' });
  }

  res.json(users);
};

const createNewUser = async (req: Request, res: Response) => {
  const { username, password, roles } = req.body;

  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const duplicate = await UserModel.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate username' });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const userObject = { username, password: hashedPwd, roles };

  const user = await UserModel.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id, username, roles, active, password } = req.body;

  if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
    return res.status(400).json({ message: 'All fields except password are required' });
  }

  const user = await UserModel.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const duplicate = await UserModel.findOne({ username }).lean().exec();

  if (duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate username' });
  }

  user.username = username;
  user.roles = roles;
  user.active = active;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.username} updated` });
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'User ID required' });
  }

  const terms = await TermModel.findOne({ user: id }).lean().exec();

  if (terms) {
    return res.status(400).json({ message: 'User has assigned terms' });
  }

  const user = await UserModel.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const result = await user.deleteOne();
  const reply = `Username ${result.username} with ID ${result._id} deleted`;

  res.json(reply);
};

export const userController = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
