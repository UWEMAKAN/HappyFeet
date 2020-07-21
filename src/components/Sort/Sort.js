import React from 'react';
import propTypes from 'prop-types';
import './Sort.css';

const Sort = ({ sortHandler }) => (
  <div className="Sort">
    <h2>Sort By</h2>
    <button onClick={sortHandler} name="" tabIndex="-3" type="button">Relevance</button>
    <button onClick={sortHandler} name="ascending" tabIndex="-2" type="button">Price - Low to High</button>
    <button onClick={sortHandler} name="descending" tabIndex="-1" type="button">Price - High to Low</button>
  </div>
);

Sort.propTypes = {
  sortHandler: propTypes.func.isRequired
};

export default Sort;
