import LoginIcon from '../../../shared/icons/Login';
import LogoutIcon from '../../../shared/icons/Logout';
import MenuIcon from '../../../shared/icons/Menu';

type IconsProps = {
  onClickLogin?: React.MouseEventHandler<HTMLElement>;
  onClickLogout?: React.MouseEventHandler<HTMLElement>;
  onClickMenu?: React.MouseEventHandler<HTMLElement>;
  closeIconVisible?: boolean;
};

const Icons = ({ onClickLogin, onClickLogout, onClickMenu, closeIconVisible }: IconsProps) => {

  return (
    <div className="icons">
      <LoginIcon onClick={onClickLogin} />
      <LogoutIcon onClick={onClickLogout} />
      <MenuIcon
        onClick={onClickMenu}
        closeIconVisible={closeIconVisible}
      />
    </div>
  );
};

export default Icons;
