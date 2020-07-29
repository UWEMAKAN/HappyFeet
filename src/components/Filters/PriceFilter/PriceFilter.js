import React from 'react';
import propTypes from 'prop-types';
import './PriceFilter.css';

const PriceFilter = ({ selectHandler }) => (
  <div className="Filter PriceFilter">
    <h3>Price</h3>
    <div>
      <select onChange={selectHandler} name="minPriceSelector">
        <option value={null}>Min</option>
        <option value={0}>0</option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={1500}>1500</option>
        <option value={2000}>2000</option>
        <option value={2500}>2500</option>
        <option value={3000}>3000</option>
        <option value={3500}>3500</option>
        <option value={4000}>4000</option>
      </select>
      <span>to</span>
      <select onChange={selectHandler} name="maxPriceSelector">
        <option value={null}>Max</option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={1500}>1500</option>
        <option value={2000}>2000</option>
        <option value={2500}>2500</option>
        <option value={3000}>3000</option>
        <option value={3500}>3500</option>
        <option value={4000}>4000</option>
        <option value={4001}>4000+</option>
      </select>

    </div>
  </div>
);

PriceFilter.propTypes = {
  selectHandler: propTypes.func.isRequired
};

export default PriceFilter;
