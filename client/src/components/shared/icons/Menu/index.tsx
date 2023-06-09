type MenuProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  closeIconVisible?: boolean;
};

const MenuIcon = ({ onClick, closeIconVisible }: MenuProps) => {
  const classes = closeIconVisible ? 'fa-solid fa-times' : 'fa-solid fa-bars';

  return <i className={classes} id="menu-bars" onClick={onClick}></i>;
};

export default MenuIcon;
