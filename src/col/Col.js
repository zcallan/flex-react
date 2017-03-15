import './col.css';
import React from 'react';


const Col = ({
  children,
  className,
  padding,
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
    <div {...restProps} className={`col ${colClasses} ${offSetClasses} ${className} ${padding ? 'col-padding' : ''}`}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  className: '',
  padding: true,
};

Col.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  padding: React.PropTypes.bool,
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
  xsOffset: React.PropTypes.number,
  smOffset: React.PropTypes.number,
  mdOffset: React.PropTypes.number,
  lgOffset: React.PropTypes.number,
};

export default Col;
