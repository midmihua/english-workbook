import { PAGES } from '../../../../shared/constants';
import ListCheckIcon from '../../icons/ListCheck';
import Title from '../Title';

const PracticePageTitle = () => {
  return (
    <Title Icon={ListCheckIcon} title={PAGES.PRACTICE.name} classes={'page-title'} />
  );
};

export default PracticePageTitle;
