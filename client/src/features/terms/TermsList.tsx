import SpinnerIcon from '../../components/shared/spinners/Spinner';
import InfoNotification from '../../components/shared/titles/Info';
import { FEATURES } from '../../shared/constants';
import { buildErrorMessage } from '../api/helper';
import TermsListItem from './TermsListItem';
import { useGetTermsQuery } from './termsSlice';

const TermsList = () => {
  const {
    data: terms = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTermsQuery(undefined, {
    pollingInterval: FEATURES.TERMS.POLLING_INTERVAL,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) {
    content = <SpinnerIcon />;
  } else if (isSuccess) {
    content = (
      <div className="cards-list">
        {terms.map(({ id }) => (
          <TermsListItem id={id} key={id} />
        ))}
      </div>
    );
  } else if (isError) {
    const errMessage = buildErrorMessage(error);
    content = <InfoNotification text={errMessage} />;
  } else {
    content = <InfoNotification text={`No terms found`} />;
  }

  return content;
};

export default TermsList;
