import { useNavigate } from 'react-router-dom';
import CommonButton from '../commonButton';

const GoBack = () => {
  const navigate = useNavigate();

  const goBackHandler = () => navigate(-1);

  return (
    <CommonButton
      label={`Go back button`}
      classes={`button`}
      onClick={goBackHandler}
    >
      {`Go back`}
    </CommonButton>
  );
};

export default GoBack;
