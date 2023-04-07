import mongoose from 'mongoose';
import { MONGODB } from '../utils/constants.js';

const termSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: MONGODB.MODEL.USER,
    },
    word: {
      type: String,
      require: true,
      unique: true,
    },
    results: [
      {
        definition: String,
        partOfSpeech: String,
        synonyms: [String],
        antonyms: [String],
        also: [String],
        derivation: [String],
        examples: [String],
      },
    ],
    pronunciation: {
      type: Map,
      of: String,
    },
    customProps: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  },
);

export const TermModel = mongoose.model(MONGODB.MODEL.TERM, termSchema);
