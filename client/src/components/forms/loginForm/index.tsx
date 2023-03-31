import classNames from 'classnames';
import LoginButton from '../../shared/button/login';
import RegisterButton from '../../shared/button/register';
import LoginIcon from '../../shared/icons/login';
import PasswordInput from '../../shared/input/password';
import UsernameInput from '../../shared/input/username';
import PageTitle from '../../shared/pageTitle';

type LoginFormProps = {
  visible?: boolean;
  onClick?: React.MouseEventHandler<HTMLFormElement>;
};

const LoginForm = ({ visible, onClick }: LoginFormProps) => {
  const classes = classNames('login-page', { 'active': visible });

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <form className={classes} autoComplete='off' onClick={onClick}>
      <div className="wrapper" onClick={stopPropagation}>

        <PageTitle
          Icon={LoginIcon}
          title={`login form`}
          classes={'title'}
        />

        <UsernameInput />
        <PasswordInput />

        <div className="btns-container">
          <LoginButton onClick={() => { }} />
          <RegisterButton onClick={() => { }} />
        </div>

      </div>
    </form >
  );
};

export default LoginForm;
