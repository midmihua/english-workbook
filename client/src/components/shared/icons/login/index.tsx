type LoginProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Login = ({ onClick }: LoginProps) => {

  return (
    <i
      className="fa-solid fa-right-to-bracket"
      id="login"
      onClick={onClick}
    ></i>
  );
};

export default Login;
