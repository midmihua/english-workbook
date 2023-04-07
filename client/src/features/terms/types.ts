type ArbitraryProperties = {
  [key: string]: string;
};

export type TermResult = {
  definition: string;
  partOfSpeech?: string;
  synonyms?: string[];
  antonyms?: string[];
  also?: string[];
  derivation?: string[];
  examples?: string[];
};

export interface ITerm {
  id: string;
  word: string;
  results: TermResult[];
  pronunciation?: ArbitraryProperties;
  customProps?: ArbitraryProperties;
}
