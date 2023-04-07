import { PAGES } from '../../../../shared/constants';
import ChartLineIcon from '../../icons/ChartLine';
import Title from '../Title';

const DashboardPageTitle = () => {
  return (
    <Title Icon={ChartLineIcon} title={PAGES.DASHBOARD.name} classes={'page-title'} />
  );
};

export default DashboardPageTitle;
