import React from 'react';
import PriceFilter from './PriceFilter/PriceFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import ColorFilter from './ColorFilter/ColorFilter';

const Filters = () => (
  <div>
    <PriceFilter />
    <BrandFilter />
    <ColorFilter />
  </div>
);

export default Filters;
