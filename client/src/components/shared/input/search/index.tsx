import BaseInput from '../baseInput';

type SearchInputProps = {
  onChange?: () => void;
};

const SearchInput = ({ onChange }: SearchInputProps) => {

  return (
    <BaseInput
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
