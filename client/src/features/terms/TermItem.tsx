import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app';
import FullDescriptionCard from '../../components/main/cards/FullDescription';
import InfoNotification from '../../components/shared/titles/Info';
import { selectTermById } from './termsSlice';

const TermItem = () => {
  const { id } = useParams();
  const term = useAppSelector((state) => selectTermById(state, id));

  let content;

  if (term) {
    content = <FullDescriptionCard term={term} />;
  } else {
    content = <InfoNotification text={`No term found`} />;
  }
  return content;
};

export default TermItem;
