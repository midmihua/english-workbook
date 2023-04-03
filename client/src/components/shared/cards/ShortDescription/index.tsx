type ShortDescriptionCardProps = {
  text: string;
  description: string;
};

const ShortDescriptionCard = ({ text, description }: ShortDescriptionCardProps) => {

  return (
    <div className="card">
      <h3>{text}</h3>
      <p>
        <span>definition:</span>
        {description}
      </p>
    </div>
  );
};

export default ShortDescriptionCard;
