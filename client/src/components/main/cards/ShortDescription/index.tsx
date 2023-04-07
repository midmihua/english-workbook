type ShortDescriptionCardProps = {
  text: string;
  description: string;
  onClick?: () => void;
};

const ShortDescriptionCard = ({
  text,
  description,
  onClick,
}: ShortDescriptionCardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{text}</h3>
      <p>
        <span>definition:</span>
        {description}
      </p>
    </div>
  );
};

export default ShortDescriptionCard;
