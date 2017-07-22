import './col.scss';
import React from 'react';
import { any, bool, number, string } from 'prop-types';


const Col = ({
  children,
  className = '',
  xs = 12,
  sm = xs,
  md = sm,
  lg = md,
  xsOffset = 0,
  smOffset = xsOffset,
  mdOffset = smOffset,
  lgOffset = mdOffset,
  ...restProps,
}) => {
  const xsOffsetClass = ( xsOffset ) ? `xs-offset-${xsOffset}` : '';
  const smOffsetClass = ( smOffset ) ? `sm-offset-${smOffset}` : '';
  const mdOffsetClass = ( mdOffset ) ? `md-offset-${mdOffset}` : '';
  const lgOffsetClass = ( lgOffset ) ? `lg-offset-${lgOffset}` : '';
  const offSetClasses = `${xsOffsetClass} ${smOffsetClass} ${mdOffsetClass} ${lgOffsetClass}`;
  const colClasses = `xs-${xs} sm-${sm} md-${md} lg-${lg}`;

  return (
    <div {...restProps} className={`col ${colClasses} ${offSetClasses} ${className}`}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: any,
  className: string,
  padding: bool,
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xsOffset: number,
  smOffset: number,
  mdOffset: number,
  lgOffset: number,
};

export default Col;
