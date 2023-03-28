import { InputType } from '../../../../types';

type BaseInputProps = {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: InputType;
  placeholder?: string;
  checked?: boolean;
  onChange?: () => void;
};

const BaseInput = ({ label, id, name, value, type, placeholder, checked, onChange }: BaseInputProps) => {

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

export default BaseInput;
