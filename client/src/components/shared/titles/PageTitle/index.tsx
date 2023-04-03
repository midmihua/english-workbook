import classNames from 'classnames';

type PageTitleProps = {
  Icon: ({ }) => JSX.Element;
  title: string;
  classes?: string;
};

const PageTitle = ({ Icon, title, classes }: PageTitleProps) => {
  const cls = classNames(classes, { 'page-title': !classes });

  return (
    <div className={cls}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
