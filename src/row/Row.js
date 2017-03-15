import './row.css';
import React from 'react';


const Row = ({
  children,
  className,
  left,
  right,
  center,
  spaceAround,
  spaceBetween,
  padding,
  vAlign,
  xs = 12,
  sm = xs,
  md = sm,
  lg = md,
  ...restProps,
}) => {
  const colClasses = `xs-${xs} sm-${sm} md-${md} lg-${lg}`;
  const paddingClass = ( padding ) ? 'row-padding' : '';
  const vAlignClass = ( vAlign ) ? 'row-valign' : '';

  let position = '';
  if ( left ) position = 'row-left';
  else if ( right ) position = 'row-right';
  else if ( center ) position = 'row-center';
  else if ( spaceAround ) position = 'row-space-around';
  else if ( spaceBetween ) position = 'row-space-between';

  return (
    <div {...restProps} className={`row ${colClasses} ${position} ${paddingClass} ${vAlignClass} ${className}`}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: '',
  left: false,
  right: false,
  center: false,
  spaceAround: false,
  spaceBetween: false,
  padding: false,
  vAlign: false,
};

Row.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  left: React.PropTypes.bool,
  right: React.PropTypes.bool,
  center: React.PropTypes.bool,
  spaceAround: React.PropTypes.bool,
  spaceBetween: React.PropTypes.bool,
  padding: React.PropTypes.bool,
  vAlign: React.PropTypes.bool,
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
};

export default Row;
