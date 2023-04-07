type ReturnIconProps = {
  onClick?: () => void;
};
const ReturnIcon = ({ onClick }: ReturnIconProps) => {
  return <i className="fa-solid fa-angles-left" onClick={onClick}></i>;
};

export default ReturnIcon;
