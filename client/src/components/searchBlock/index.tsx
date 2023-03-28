import { PAGES } from '../../constants';
import BookIcon from '../shared/icons/book';
import PageTitle from '../shared/pageTitle';
import SearchForm from './search';

const SearchBlock = () => {

  return (
    <div className="top-block">
      <SearchForm />
      <PageTitle
        Icon={BookIcon}
        title={PAGES.VOCABULARY.name}
      />
    </div>
  );
};

export default SearchBlock;
