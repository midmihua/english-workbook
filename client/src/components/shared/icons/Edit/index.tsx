type EditIconProps = {
  onClick?: () => void;
};

const EditIcon = ({ onClick }: EditIconProps) => {
  return <i className="fa-regular fa-pen-to-square" onClick={onClick}></i>;
};

export default EditIcon;
