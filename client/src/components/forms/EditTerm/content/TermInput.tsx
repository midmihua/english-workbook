import Input from '../../../shared/inputs/Input';

type TermInputProps = {
  label: string;
  inputField: string;
  value: string | undefined;
  size?: number;
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TermInput = ({
  label,
  inputField,
  value,
  size,
  classes = 'edit-form-input',
  onChange,
}: TermInputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={inputField}>{label}</label>
      <Input
        id={inputField}
        name={inputField}
        label={`${inputField} input field`}
        value={value}
        size={size}
        classes={classes}
        onChange={onChange}
      />
    </div>
  );
};

export default TermInput;
