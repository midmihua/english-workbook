import DefinitionCard from '../../components/shared/card/definition';

export type TermItemProps = {
  term: string;
  description: string;
};

const TermItem = ({ term, description }: TermItemProps) => {

  return (
    <DefinitionCard
      text={term}
      description={description}
    />
  );
};

export default TermItem;
