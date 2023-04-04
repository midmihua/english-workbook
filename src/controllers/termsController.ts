import { Request, Response } from 'express';
import 'express-async-handler';
import { TermModel } from '../models/Term.js';
import { UserModel } from '../models/User.js';

const getAllTerms = async (req: Request, res: Response) => {
  const terms = await TermModel.find().lean();

  if (!terms?.length) {
    return res.status(400).json({ message: 'No terms found' });
  }

  res.json(terms);
};

const createNewTerm = async (req: Request, res: Response) => {
  const { username, word, results } = req.body;

  if (!username || !word) {
    return res.status(400).json({ message: `'username' and 'word' fields are require` });
  }

  const providedUser = await UserModel.findOne({ username }).lean().exec();

  if (!providedUser) {
    return res.status(400).json({ message: `No user found` });
  }

  const duplicatedTerm = await TermModel.findOne({ word }).lean().exec();

  if (duplicatedTerm) {
    return res.status(409).json({ message: 'Term already exists' });
  }

  const termObject = {
    user: providedUser,
    word,
    results,
  };

  const term = await TermModel.create(termObject);

  if (term) {
    res.status(201).json({ message: `New term '${term.word}' created` });
  } else {
    res.status(400).json({ message: 'Invalid term data received' });
  }
};

const updateTerm = async (req: Request, res: Response) => {
  const { id, username, word, results } = req.body;

  if (!id || !username || !word) {
    return res.status(400).json({ message: `'id', 'username' and 'word' fields are require` });
  }

  const providedUser = await UserModel.findOne({ username }).lean().exec();

  if (!providedUser) {
    return res.status(400).json({ message: `No user found` });
  }

  const term = await TermModel.findById(id).exec();

  if (!term) {
    return res.status(400).json({ message: 'Term not found' });
  }

  const duplicatedTerm = await TermModel.findOne({ word }).lean().exec();

  if (duplicatedTerm && duplicatedTerm?._id.toString() !== id) {
    return res.status(409).json({ message: 'Term already exists' });
  }

  term.user = providedUser._id;
  term.word = word;
  term.results = results;

  const updatedTerm = await term.save();

  res.json({ message: `'${updatedTerm.word}' updated` });
};

const deleteTerm = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Term ID required' });
  }

  const term = await TermModel.findById(id).exec();

  if (!term) {
    return res.status(400).json({ message: 'Term not found' });
  }

  const result = await term.deleteOne();
  const reply = `Term '${result.word}' with ID ${result._id} deleted`;

  res.json(reply);
};

export const termController = {
  getAllTerms,
  createNewTerm,
  updateTerm,
  deleteTerm,
};
