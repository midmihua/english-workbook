type LoginProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const LoginIcon = ({ onClick }: LoginProps) => {
  return <i className="fa-solid fa-right-to-bracket" id="login" onClick={onClick}></i>;
};

export default LoginIcon;
