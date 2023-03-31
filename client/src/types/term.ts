type Pronunciation = {
  [key: string]: string;
};

type Syllables = {
  count: number;
  list: string[];
};

type Result = {
  definition: string;
  partOfSpeech: string;
  synonyms?: string[];
  antonyms?: string[];
  hasCategories?: string[];
  typeOf?: string[];
  hasTypes?: string[];
  hasParts?: string[];
  verbGroup?: string[];
  memberOf?: string[];
  also?: string[];
  derivation?: string[];
  examples?: string[];
  pronunciation?: Pronunciation;
  syllables?: Syllables;
  frequency?: number;
};

export interface ITerm {
  id: string;
  word: string;
  results: Result[];
};
