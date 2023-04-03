import SearchIcon from '../../../shared/icons/Search';
import SearchInput from '../../../shared/inputs/Search';

const InputSection = () => {

  return (
    <div className="search">
      <label>
        <SearchInput />
        <SearchIcon />
      </label>
    </div>
  );
};

export default InputSection;
