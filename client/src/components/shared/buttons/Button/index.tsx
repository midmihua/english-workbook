type ButtonProps = {
  label?: string,
  classes?: string,
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, classes, children, onClick }: ButtonProps) => {

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

export default Button;
