import { useNavigate } from 'react-router-dom';
import BaseButton from '../baseButton';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBackHandler = () => navigate(-1);

  return (
    <BaseButton
      label={`Go back button`}
      classes={`button`}
      onClick={goBackHandler}
    >
      {`Go back`}
    </BaseButton>
  );
};

export default GoBackButton;
