import BaseButton from '../baseButton';

type RegisterProps = {
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const RegisterButton = ({ classes, onClick }: RegisterProps) => {
  const cls = classes || 'btn';

  return (
    <BaseButton
      label={`Register button`}
      classes={cls}
      onClick={onClick}
    >
      {`Register`}
    </BaseButton>
  );
};

export default RegisterButton;
