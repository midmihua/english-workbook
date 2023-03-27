import Book from '../../components/shared/icons/book';
import PageTitle from '../../components/shared/pageTitle';
import { PAGES } from '../../constants';

const Vocabulary = () => {

  return (
    <section className="vocabulary" id="vocabulary">
      <PageTitle
        Icon={Book}
        title={PAGES.VOCABULARY.name}
      />
    </section>
  );
};

export default Vocabulary;
