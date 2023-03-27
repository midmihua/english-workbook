type CommonButtonProps = {
  label?: string,
  classes?: string,
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CommonButton = ({ label, classes, children, onClick }: CommonButtonProps) => {
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

export default CommonButton;
