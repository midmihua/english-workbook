import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../../../constants';

type CommonLinkProps = {
  path?: string,
  label?: string,
  classes?: string,
  children?: React.ReactNode;
};

const CommonLink = ({ path = PAGES.HOME.url, label, classes, children }: CommonLinkProps) => {
  const ariaLabel = label ? label : `Go to ${path}`;

  return (
    <Link
      aria-label={ariaLabel}
      className={classes}
      to={path}
    >
      {children}
    </Link>
  );
};

export default CommonLink;
