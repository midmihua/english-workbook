import Input from '../Input';

type PasswordInputProps = {
  onChange?: () => void;
};

const PasswordInput = ({ onChange }: PasswordInputProps) => {

  return (
    <Input
      label={`Password input field`}
      id={`password`}
      name={`password`}
      type={`password`}
      placeholder={`password`}
      onChange={onChange}
    />
  );
};

export default PasswordInput;
