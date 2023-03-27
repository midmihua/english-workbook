import { useLocation } from 'react-router-dom';
import { PAGES } from '../../../constants';
import CommonLink from '../../shared/link/commonLink';

type NavProps = {
  visible?: boolean;
};

const Nav = ({ visible }: NavProps) => {
  const location = useLocation();
  const classes = visible ? 'navbar active' : 'navbar';

  const getLinkCssClass = (link: string) => {
    return location?.pathname.includes(link) ? 'navbar-link active' : 'navbar-link';
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
