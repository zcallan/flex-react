import './row.scss';
import React from 'react';
import { any, bool, number, string } from 'prop-types';


const Row = ({
  children,
  className = '',
  left = false,
  right = false,
  center = false,
  spaceAround = false,
  spaceBetween = false,
  vAlign = false,
  xs = 12,
  sm = xs,
  md = sm,
  lg = md,
  ...restProps,
}) => {
  const colClasses = `xs-${xs} sm-${sm} md-${md} lg-${lg}`;
  const vAlignClass = ( vAlign ) ? 'row-valign' : '';

  let position = '';
  if ( left ) position = 'row-left';
  else if ( right ) position = 'row-right';
  else if ( center ) position = 'row-center';
  else if ( spaceAround ) position = 'row-space-around';
  else if ( spaceBetween ) position = 'row-space-between';

  return (
    <div {...restProps} className={`row ${colClasses} ${position} ${vAlignClass} ${className}`}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: any,
  className: string,
  left: bool,
  right: bool,
  center: bool,
  spaceAround: bool,
  spaceBetween: bool,
  vAlign: bool,
  xs: number,
  sm: number,
  md: number,
  lg: number,
};

export default Row;
