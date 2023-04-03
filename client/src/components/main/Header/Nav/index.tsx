import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { PAGES } from '../../../../shared/constants';
import CommonLink from '../../../shared/links/BasicLink';

type NavProps = {
  visible?: boolean;
};

const Nav = ({ visible }: NavProps) => {
  const location = useLocation();

  const classes = classNames('navbar', { 'active': visible });

  const getLinkCssClass = (link: string) => {
    return classNames('navbar-link', { 'active': location?.pathname.includes(link) });
  };

  return (
    <nav className={classes}>
      {
        [
          PAGES.DASHBOARD,
          PAGES.VOCABULARY,
          PAGES.PRACTICE,
        ]
          .map(({ url, name }) => (
            <CommonLink key={url} path={url} classes={getLinkCssClass(url)}>
              {name}
            </CommonLink>
          ))
      }
    </nav >
  );
};

export default Nav;
