import React from 'react';
import propTypes from 'prop-types';
import './Color.css';

const Color = ({ name, color, checkedHandler }) => (
  <div className="ColorItem">
    <input onChange={checkedHandler} name={name.toLowerCase()} type="checkbox" />
    <div
      style={{ backgroundColor: color }}
      className="Color"
    >
      {' '}
    </div>
    <div>{name}</div>
  </div>
);

Color.propTypes = {
  name: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  checkedHandler: propTypes.func.isRequired
};

export default Color;
