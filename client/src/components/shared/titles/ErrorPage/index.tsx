import { PAGES } from '../../../../shared/constants';
import BugIcon from '../../icons/Bug';
import Title from '../Title';

const ErrorPageTitle = () => {
  return <Title Icon={BugIcon} title={PAGES.ERROR.name} classes={'page-title'} />;
};

export default ErrorPageTitle;
