import React, { useState } from 'react';
import { ITerm } from '../../../features/terms';
import TermActionsPanel from '../../main/panels/TermActions';
import TermInput from './content/TermInput';

type EditTermFormProps = {
  term: ITerm;
};

const EditTermForm = ({ term }: EditTermFormProps) => {
  const { word, results, pronunciation } = term;
  const { definition, examples, partOfSpeech, synonyms, antonyms, also, derivation } =
    results[0];

  const [currentTerm, setCurrentTerm] = useState(word);
  const [currentPronunciation, setCurrentPronunciation] = useState(
    pronunciation?.['all'] as string,
  );
  const [currentDefinition, setCurrentDefinition] = useState(definition);
  const [currentExamples, setCurrentExamples] = useState(examples);
  const [currentPartOfSpeech, setCurrentPartOfSpeech] = useState(partOfSpeech);

  const [currentSynonyms, setCurrentSynonyms] = useState(synonyms);
  const [currentAntonyms, setCurrentAntonyms] = useState(antonyms);
  const [currentAlso, setCurrentAlso] = useState(also);
  const [currentDerivation, setCurrentDerivation] = useState(derivation);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentTerm(e.target.value);

  const handlePronunciationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentPronunciation(e.target.value);

  const handleDefinitionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentDefinition(e.target.value);

  const handleExamplesChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentExamples([e.target.value]);

  const handlePartOfSpeechsChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentPartOfSpeech(e.target.value);

  const handleSynonymsChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentSynonyms([e.target.value]);

  const handleAntonymsChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentAntonyms([e.target.value]);

  const handleAlsoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentAlso([e.target.value]);

  const handleDerivationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentDerivation([e.target.value]);

  return (
    <div className="card-outer-container">
      <div className="card-content">
        <TermActionsPanel showSave={true} showTrash={true} />
        <h3 className="card-phrase">Edit Term Form</h3>

        <div className="card-inner-container">
          <form autoComplete="off" onSubmit={handleFormSubmit} className="edit-form">
            <TermInput
              inputField={'word'}
              label={'Term'}
              value={currentTerm}
              onChange={handleTermChange}
            />

            <TermInput
              inputField={'pronunciation'}
              label={'Pronunciation'}
              value={currentPronunciation}
              onChange={handlePronunciationChange}
            />

            <TermInput
              inputField={'definition'}
              label={'Definition'}
              value={currentDefinition}
              onChange={handleDefinitionChange}
            />

            <TermInput
              inputField={'examples'}
              label={'Examples'}
              value={currentExamples?.[0]}
              onChange={handleExamplesChange}
            />

            <TermInput
              inputField={'partOfSpeech'}
              label={'Part of speech'}
              value={currentPartOfSpeech}
              onChange={handlePartOfSpeechsChange}
            />

            <TermInput
              inputField={'synonyms'}
              label={'Synonyms'}
              value={currentSynonyms?.[0]}
              onChange={handleSynonymsChange}
            />

            <TermInput
              inputField={'antonyms'}
              label={'Antonyms'}
              value={currentAntonyms?.[0]}
              onChange={handleAntonymsChange}
            />

            <TermInput
              inputField={'also'}
              label={'Also'}
              value={currentAlso?.[0]}
              onChange={handleAlsoChange}
            />

            <TermInput
              inputField={'derivation'}
              label={'Derivation'}
              value={currentDerivation?.[0]}
              onChange={handleDerivationChange}
            />

            <div className="definition-content">
              <div className="phrase-definition"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTermForm;
