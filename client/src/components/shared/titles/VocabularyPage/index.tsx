import { PAGES } from '../../../../shared/constants';
import BookIcon from '../../icons/Book';
import Title from '../Title';

const VocabularyPageTitle = () => {
  return <Title Icon={BookIcon} title={PAGES.VOCABULARY.name} classes={'page-title'} />;
};

export default VocabularyPageTitle;
