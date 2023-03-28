import SearchIcon from '../../shared/icons/search';
import SearchInput from '../../shared/input/search';

const SearchForm = () => {

  return (
    <div className="search">
      <label>
        <SearchInput />
        <SearchIcon />
      </label>
    </div>
  );
};

export default SearchForm;
