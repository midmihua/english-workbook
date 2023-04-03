import SearchBlock from '../../components/main/Search';
import TermsList from '../../features/terms/TermsList';

const VocabularyPage = () => {

  return (
    <section className="vocabulary">
      <SearchBlock />
      <TermsList />
    </section >
  );
};

export default VocabularyPage;
