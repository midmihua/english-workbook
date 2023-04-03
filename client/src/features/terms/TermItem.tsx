import ShortDescriptionCard from '../../components/shared/cards/ShortDescription';

export type TermItemProps = {
  term: string;
  description: string;
};

const TermItem = ({ term, description }: TermItemProps) => {

  return (
    <ShortDescriptionCard
      text={term}
      description={description}
    />
  );
};

export default TermItem;
