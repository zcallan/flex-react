import './grid.scss';
import React from 'react';
import { any, bool, number, string } from 'prop-types';


const Grid = ({ children, className = '', ...restProps }) => {
  return (
    <div {...restProps} className={`grid ${className}`}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: any,
  className: string,
  padding: bool,
};

export default Grid;
