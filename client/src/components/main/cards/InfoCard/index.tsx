type InfoCardProps = {
  children?: React.ReactNode;
};

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <div className="card-info">
      <p>{children}</p>
    </div>
  );
};

export default InfoCard;
