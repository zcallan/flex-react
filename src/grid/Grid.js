import './grid.css';
import React from 'react';


const Grid = ({ children, className, padding, ...restProps }) => {
  return (
    <div {...restProps} className={`flex-react-grid ${!padding ? 'remove-padding' : ''} ${className}`}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  className: '',
  padding: true,
};

Grid.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  padding: React.PropTypes.bool,
};

export default Grid;
