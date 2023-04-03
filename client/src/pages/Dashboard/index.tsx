import ChartLineIcon from '../../components/shared/icons/ChartLine';
import PageTitle from '../../components/shared/titles/PageTitle';
import { PAGES } from '../../shared/constants';

const DashboardPage = () => {

  return (
    <section className="dashboard" id="dashboard">
      <PageTitle
        Icon={ChartLineIcon}
        title={PAGES.DASHBOARD.name}
      />
    </section>
  );
};

export default DashboardPage;
