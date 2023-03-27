type LogoutProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Logout = ({ onClick }: LogoutProps) => {

  return (
    <i
      className="fa-solid fa-right-from-bracket"
      id="logout"
      onClick={onClick}
    ></i>
  );
};

export default Logout;
