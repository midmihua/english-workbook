import BaseInput from '../baseInput';

type UsernameInputProps = {
  onChange?: () => void;
};

const UsernameInput = ({ onChange }: UsernameInputProps) => {

  return (
    <BaseInput
      label={`Username input field`}
      id={`username`}
      name={`username`}
      type={`text`}
      placeholder={`username`}
      onChange={onChange}
    />
  );
};

export default UsernameInput;
