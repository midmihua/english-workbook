import TermLayout from '../../components/layouts/Term';
import SearchBlock from '../../components/main/Search';

const VocabularyPage = () => {
  return (
    <section className="vocabulary">
      <SearchBlock />
      <TermLayout />
    </section>
  );
};

export default VocabularyPage;
