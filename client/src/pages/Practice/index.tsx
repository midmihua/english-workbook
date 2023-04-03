import ListCheckIcon from '../../components/shared/icons/ListCheck';
import PageTitle from '../../components/shared/titles/PageTitle';
import { PAGES } from '../../shared/constants';

const PracticePage = () => {

  return (
    <section className="practice" id="practice">
      <PageTitle
        Icon={ListCheckIcon}
        title={PAGES.PRACTICE.name}
      />
    </section>
  );
};

export default PracticePage;
