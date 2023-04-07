import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBackHandler = () => navigate(-1);

  return (
    <Button label={`Go back button`} classes={`button`} onClick={goBackHandler}>
      {`Go back`}
    </Button>
  );
};

export default GoBackButton;
