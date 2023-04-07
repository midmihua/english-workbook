import Input from '../Input';

type UsernameInputProps = {
  onChange?: () => void;
};

const UsernameInput = ({ onChange }: UsernameInputProps) => {
  return (
    <Input
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
