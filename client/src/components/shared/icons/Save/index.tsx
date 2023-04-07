type SaveIconProps = {
  onClick?: () => void;
};

const SaveIcon = ({ onClick }: SaveIconProps) => {
  return <i className="fa-regular fa-floppy-disk" onClick={onClick}></i>;
};

export default SaveIcon;
