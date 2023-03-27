import Login from '../../shared/icons/login';
import Logout from '../../shared/icons/logout';
import Menu from '../../shared/icons/menu';

type IconsProps = {
  onClickLogin?: React.MouseEventHandler<HTMLElement>;
  onClickLogout?: React.MouseEventHandler<HTMLElement>;
  onClickMenu?: React.MouseEventHandler<HTMLElement>;
  closeIconVisible?: boolean;
};

const Icons = ({ onClickLogin, onClickLogout, onClickMenu, closeIconVisible }: IconsProps) => {

  return (
    <div className="icons">
      <Login onClick={onClickLogin} />
      <Logout onClick={onClickLogout} />
      <Menu
        onClick={onClickMenu}
        closeIconVisible={closeIconVisible}
      />
    </div>
  );
};

export default Icons;
