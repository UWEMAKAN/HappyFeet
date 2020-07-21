import React from 'react';
import propTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import './BrandFilter.css';

const BrandFilter = ({ searchHandler }) => (
  <div className="Filter BrandFilter">
    <h3>Brand</h3>
    <div>
      <div className="FilterBrand">
        <FiSearch />
        <span>search brand</span>
      </div>
      <input onChange={searchHandler} name="search" id="search" type="search" />
    </div>
  </div>
);

BrandFilter.propTypes = {
  searchHandler: propTypes.func.isRequired
};

export default BrandFilter;
