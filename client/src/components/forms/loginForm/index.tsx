
type LoginFormProps = {
  visible?: boolean;
  onClick?: React.MouseEventHandler<HTMLFormElement>;
};

const LoginForm = ({ visible, onClick }: LoginFormProps) => {

  const classes = visible ? "login-page active" : "login-page";

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <form className={classes} autoComplete='off' onClick={onClick}>
      <div className="wrapper" onClick={stopPropagation}>

        <div className="title">
          <i className="fa-solid fa-right-to-bracket"></i>
          <h2>login form</h2>
        </div>

        <input type="text" name="" id="username" placeholder="username" />
        <input type="password" name="" id="password" placeholder="password" />

        <div className="btns-container">
          <div className="btn">login</div>
          <div className="btn">continue as guest</div>
        </div>

      </div>
    </form>
  );
};

export default LoginForm;
