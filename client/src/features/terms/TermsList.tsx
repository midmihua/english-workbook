import TermItem from './TermItem';
import { useGetTermsQuery } from './termsSlice';

const TermsList = () => {
  const {
    data: terms = [],
    isLoading,
    isSuccess,
  } = useGetTermsQuery();

  const content = (
    <div className="cards-list">
      {
        terms.map(({ id, word, results }) => (
          <TermItem
            key={id}
            term={word}
            description={results[0]?.definition}
          />
        ))
      }
    </div>
  );

  return content;
};

export default TermsList;
