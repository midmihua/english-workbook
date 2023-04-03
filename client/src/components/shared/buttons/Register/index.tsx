import classNames from 'classnames';
import Button from '../Button';

type RegisterProps = {
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const RegisterButton = ({ classes, onClick }: RegisterProps) => {
  const cls = classNames(classes, { 'btn': !classes });

  return (
    <Button
      label={`Register button`}
      classes={cls}
      onClick={onClick}
    >
      {`Register`}
    </Button>
  );
};

export default RegisterButton;
