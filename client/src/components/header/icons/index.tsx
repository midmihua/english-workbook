import LoginIcon from '../../shared/icons/login';
import LogoutIcon from '../../shared/icons/logout';
import MenuIcon from '../../shared/icons/menu';

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
