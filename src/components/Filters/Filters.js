import React from 'react';
import propTypes from 'prop-types';
import PriceFilter from './PriceFilter/PriceFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import ColorFilter from './ColorFilter/ColorFilter';
import './Filters.css';

const Filters = ({ selectHandler, searchHandler, checkedHandler }) => (
  <div className="Filters">
    <h2>Filters</h2>
    <PriceFilter selectHandler={selectHandler} />
    <BrandFilter searchHandler={searchHandler} />
    <ColorFilter checkedHandler={checkedHandler} />
  </div>
);

Filters.propTypes = {
  selectHandler: propTypes.func.isRequired,
  searchHandler: propTypes.func.isRequired,
  checkedHandler: propTypes.func.isRequired
};

export default Filters;
