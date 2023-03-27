type PageTitleProps = {
  Icon: () => JSX.Element;
  title: string;
};

const PageTitle = ({ Icon, title }: PageTitleProps) => {

  return (
    <div className="page-title">
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
