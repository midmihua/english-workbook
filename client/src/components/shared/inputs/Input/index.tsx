import { InputType } from '../../../../shared/types';

type InputProps = {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: InputType;
  placeholder?: string;
  checked?: boolean;
  onChange?: () => void;
};

const Input = ({ label, id, name, value, type, placeholder, checked, onChange }: InputProps) => {

  return (
    <input
      aria-label={label}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  );
};

export default Input;
