import BaseInput from '../baseInput';

type PasswordInputProps = {
  onChange?: () => void;
};

const PasswordInput = ({ onChange }: PasswordInputProps) => {

  return (
    <BaseInput
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
