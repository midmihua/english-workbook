import { TermResult } from '../../../../../features/terms';
import DefinitionPhrase from './DefinitionPhrase';
import ExamplesList from './ExamplesList';
import Property from './Property';

type DefinitionItemProps = {
  definitionItem: TermResult;
  index: number;
};

const DefinitionItem = ({ definitionItem, index }: DefinitionItemProps) => {
  const {
    definition,
    examples,
    partOfSpeech,
    synonyms,
    antonyms,
    hasCategories,
    typeOf,
    hasTypes,
    hasParts,
    verbGroup,
    memberOf,
    also,
    derivation,
  } = definitionItem;

  return (
    <>
      <DefinitionPhrase text={definition} index={index} />
      <ExamplesList examples={examples} />

      <div className="phrase-properties">
        <Property title={`partOfSpeech`} text={partOfSpeech} />
        <Property title={`synonyms`} text={synonyms} />
        <Property title={`antonyms`} text={antonyms} />
        <Property title={`also`} text={also} />
        <Property title={`hasCategories`} text={hasCategories} />
        <Property title={`typeOf`} text={typeOf} />
        <Property title={`hasTypes`} text={hasTypes} />
        <Property title={`hasParts`} text={hasParts} />
        <Property title={`verbGroup`} text={verbGroup} />
        <Property title={`memberOf`} text={memberOf} />
        <Property title={`derivation`} text={derivation} />
      </div>
    </>
  );
};

export default DefinitionItem;
