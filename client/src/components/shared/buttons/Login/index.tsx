import classNames from 'classnames';
import Button from '../Button';

type LoginProps = {
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginButton = ({ classes, onClick }: LoginProps) => {
  const cls = classNames(classes, { btn: !classes });

  return (
    <Button label={`Login button`} classes={cls} onClick={onClick}>
      {`Login`}
    </Button>
  );
};

export default LoginButton;
