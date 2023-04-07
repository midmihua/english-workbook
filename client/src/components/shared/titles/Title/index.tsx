type TitleProps = {
  Icon: ({}) => JSX.Element;
  title: string;
  classes: string;
};

const Title = ({ Icon, title, classes }: TitleProps) => {
  return (
    <div className={classes}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
