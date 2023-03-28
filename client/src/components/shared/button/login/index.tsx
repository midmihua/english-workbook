import BaseButton from '../baseButton';

type LoginProps = {
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginButton = ({ classes, onClick }: LoginProps) => {
  const cls = classes || 'btn';

  return (
    <BaseButton
      label={`Login button`}
      classes={cls}
      onClick={onClick}
    >
      {`Login`}
    </BaseButton>
  );
};

export default LoginButton;
