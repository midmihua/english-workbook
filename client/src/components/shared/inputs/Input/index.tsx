import { BASIC_INPUT } from '../../../../shared/constants/ui';
import { InputType } from '../../../../shared/types';

type InputProps = {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: InputType;
  placeholder?: string;
  size?: number;
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  id,
  name,
  value,
  type = BASIC_INPUT.TYPE as InputType,
  placeholder,
  size = BASIC_INPUT.SIZE,
  classes,
  onChange,
}: InputProps) => {
  return (
    <input
      aria-label={label}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      size={size}
      className={classes}
      onChange={onChange}
    />
  );
};

export default Input;
