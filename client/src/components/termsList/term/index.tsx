import DefinitionCard from '../../shared/card/definition';

export type TermItemProps = {
  text: string;
  description: string;
};

const TermItem = ({ text, description }: TermItemProps) => {
  return (
    <DefinitionCard
      text={text}
      description={description}
    />
  );
};

export default TermItem;
