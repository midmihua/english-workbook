import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app';
import ShortDescriptionCard from '../../components/main/cards/ShortDescription';
import { selectTermById } from './termsSlice';

export type TermsListItemProps = {
  id: string;
};

const TermsListItem = ({ id }: TermsListItemProps) => {
  const navigate = useNavigate();

  const term = useAppSelector((state) => selectTermById(state, id));
  const text = term?.word || '';
  const description = term?.results[0]?.definition || '';

  const handleTermItemClick = () => navigate(id);

  return (
    <ShortDescriptionCard
      text={text}
      description={description}
      onClick={handleTermItemClick}
    />
  );
};

export default TermsListItem;
