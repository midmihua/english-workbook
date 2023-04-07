type TrashIconProps = {
  onClick?: () => void;
};

const TrashIcon = ({ onClick }: TrashIconProps) => {
  return <i className="fa-regular fa-trash-can" onClick={onClick}></i>;
};

export default TrashIcon;
