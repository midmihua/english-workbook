type DefinitionPhraseProps = {
  text: string | undefined;
  index: number;
};

const DefinitionPhrase = ({ text, index }: DefinitionPhraseProps) => {
  return (
    <div className="phrase-definition">
      <span>definition {index + 1}</span>
      <p>{text}</p>
    </div>
  );
};

export default DefinitionPhrase;
