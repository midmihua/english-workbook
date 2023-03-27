import ListCheck from '../../components/shared/icons/listCheck';
import PageTitle from '../../components/shared/pageTitle';
import { PAGES } from '../../constants';

const Practice = () => {

  return (
    <section className="practice" id="practice">
      <PageTitle
        Icon={ListCheck}
        title={PAGES.PRACTICE.name}
      />
    </section>
  );
};

export default Practice;
