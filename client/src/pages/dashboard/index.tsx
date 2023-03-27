import ChartLine from '../../components/shared/icons/chartLine';
import PageTitle from '../../components/shared/pageTitle';
import { PAGES } from '../../constants';

const Dashboard = () => {

  return (
    <section className="dashboard" id="dashboard">
      <PageTitle
        Icon={ChartLine}
        title={PAGES.DASHBOARD.name}
      />
    </section>
  );
};

export default Dashboard;
