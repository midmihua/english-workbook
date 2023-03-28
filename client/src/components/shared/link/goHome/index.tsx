import { PAGES } from '../../../../constants';
import BaseLink from '../baseLink';

const GoHomeLink = () => {

  return (
    <BaseLink
      path={PAGES.HOME.url}
      label={`Go Home link`}
      classes={'button'}
    >
      {`Go Home`}
    </BaseLink>
  );
};

export default GoHomeLink;
