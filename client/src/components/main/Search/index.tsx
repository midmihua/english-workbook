import { PAGES } from '../../../shared/constants';
import BookIcon from '../../shared/icons/Book';
import PageTitle from '../../shared/titles/PageTitle';
import InputSection from './InputSection';

const SearchBlock = () => {

  return (
    <div className="top-block">
      <InputSection />
      <PageTitle
        Icon={BookIcon}
        title={PAGES.VOCABULARY.name}
      />
    </div>
  );
};

export default SearchBlock;
