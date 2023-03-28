import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../../../constants';

type BaseLinkProps = {
  path?: string,
  label?: string,
  classes?: string,
  children?: React.ReactNode;
};

const BaseLink = ({ path = PAGES.HOME.url, label, classes, children }: BaseLinkProps) => {
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

export default BaseLink;
