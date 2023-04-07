import { PAGES } from '../../../../shared/constants';
import HouseIcon from '../../icons/House';
import Title from '../Title';

const HomePageTitle = () => {
  return <Title Icon={HouseIcon} title={PAGES.HOME.name} classes={'page-title'} />;
};

export default HomePageTitle;
