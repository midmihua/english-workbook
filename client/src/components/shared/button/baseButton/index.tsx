type BaseButtonProps = {
  label?: string,
  classes?: string,
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BaseButton = ({ label, classes, children, onClick }: BaseButtonProps) => {

  return (
    <button
      aria-label={label}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;
