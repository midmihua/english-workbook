import { PAGES } from '../../../../shared/constants';
import BasicLink from '../BasicLink';

const GoHomeLink = () => {
  return (
    <BasicLink path={PAGES.HOME.url} label={`Go Home link`} classes={'button'}>
      {`Go Home`}
    </BasicLink>
  );
};

export default GoHomeLink;
