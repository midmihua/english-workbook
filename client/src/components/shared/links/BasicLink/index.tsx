import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../../../shared/constants';

type BasicLinkProps = {
  path?: string,
  label?: string,
  classes?: string,
  children?: React.ReactNode;
};

const BasicLink = ({ path = PAGES.HOME.url, label, classes, children }: BasicLinkProps) => {
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

export default BasicLink;
