import React from 'react';
import propTypes from 'prop-types';
import ColorItem from './Color/Color';
import './ColorFilter.css';

const ColorFilter = ({ checkedHandler }) => {
  const colors = [
    { name: 'Blue', color: '#2c9cee' },
    { name: 'Red', color: '#e00b0b' },
    { name: 'black', color: '#000000' },
    { name: 'White', color: '#ffffff' },
    { name: 'Brown', color: '#8B4513' },
    { name: 'Green', color: '#1e5601' }
  ];

  const items = colors.map((c) => (
    <ColorItem
      checkedHandler={checkedHandler}
      key={c.name}
      color={c.color}
      name={c.name}
    />
  ));
  return (
    <div className="Filter ColorFilter">
      <h3>Color</h3>
      {items}
    </div>
  );
};

ColorFilter.propTypes = {
  checkedHandler: propTypes.func.isRequired
};

export default ColorFilter;
