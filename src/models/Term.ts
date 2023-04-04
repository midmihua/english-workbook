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
        hasCategories: [String],
        typeOf: [String],
        hasTypes: [String],
        hasParts: [String],
        verbGroup: [String],
        memberOf: [String],
        also: [String],
        derivation: [String],
        examples: [String],
        pronunciation: {
          type: Map,
          of: String,
        },
        syllables: {
          count: Number,
          list: [String],
        },
        frequency: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const TermModel = mongoose.model(MONGODB.MODEL.TERM, termSchema);
