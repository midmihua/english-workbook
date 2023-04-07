import classNames from 'classnames';
import LoginButton from '../../shared/buttons/Login';
import RegisterButton from '../../shared/buttons/Register';
import PasswordInput from '../../shared/inputs/Password';
import UsernameInput from '../../shared/inputs/Username';
import LoginFormTitle from '../../shared/titles/LoginForm';

type LoginFormProps = {
  visible?: boolean;
  onClick?: React.MouseEventHandler<HTMLFormElement>;
};

const LoginForm = ({ visible, onClick }: LoginFormProps) => {
  const classes = classNames('login-page', { active: visible });

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <form className={classes} autoComplete="off" onClick={onClick}>
      <div className="wrapper" onClick={stopPropagation}>
        <LoginFormTitle />
        <UsernameInput />
        <PasswordInput />

        <div className="btns-container">
          <LoginButton onClick={() => ({})} />
          <RegisterButton onClick={() => ({})} />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
