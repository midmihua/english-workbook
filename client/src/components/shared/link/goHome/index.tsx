import { PAGES } from '../../../../constants';
import CommonLink from '../commonLink';

const GoHome = () => {

  return (
    <CommonLink
      path={PAGES.HOME.url}
      label={`Go Home link`}
      classes={'button'}
    >
      {`Go Home`}
    </CommonLink>
  );
};

export default GoHome;
