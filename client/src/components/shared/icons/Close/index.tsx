type CloseIconProps = {
  onClick?: () => void;
};

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return <i className="fa-regular fa-circle-xmark" onClick={onClick}></i>;
};

export default CloseIcon;
