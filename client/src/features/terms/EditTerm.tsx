import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app';
import EditTermForm from '../../components/forms/EditTerm';
import InfoNotification from '../../components/shared/titles/Info';
import { selectTermById } from './termsSlice';

const EditTerm = () => {
  const { id } = useParams();
  const term = useAppSelector((state) => selectTermById(state, id));

  let content;

  if (term) {
    content = <EditTermForm term={term} />;
  } else {
    content = <InfoNotification text={`No term found`} />;
  }
  return content;
};

export default EditTerm;
