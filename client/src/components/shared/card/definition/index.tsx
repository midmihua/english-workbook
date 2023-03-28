type DefinitionCardProps = {
  text: string;
  description: string;
};

const DefinitionCard = ({ text, description }: DefinitionCardProps) => {

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

export default DefinitionCard;
