import Input from '../Input';

type SearchInputProps = {
  onChange?: () => void;
};

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <Input
      label={`Search input field`}
      id={`search`}
      name={`search`}
      type={`search`}
      placeholder={`Search ...`}
      onChange={onChange}
    />
  );
};

export default SearchInput;
