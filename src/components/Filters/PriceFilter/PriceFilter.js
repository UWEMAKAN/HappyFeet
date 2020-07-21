import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Option from './Option/Option';
import Select from './Select/Select';
import './PriceFilter.css';

const PriceFilter = ({ selectHandler }) => {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const prices = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000];
  let minPricesOptions;
  let maxPricesOptions;

  useEffect(() => {
    minPricesOptions = prices.map((price) => {
      if (maxPrice && maxPrice < price) {
        return <Option value={price} disabled />;
      }
      return <Option value={price} disabled={false} />;
    });
    minPricesOptions.unshift(<Option value="Min" disabled />);

    maxPricesOptions = prices.map((price) => {
      if (minPrice && minPrice > price) {
        return <Option value={price} disabled />;
      }
      return <Option value={price} disabled={false} />;
    });
    maxPricesOptions.unshift(<Option value="Max" disabled />);
  }, [minPrice, maxPrice]);

  const onChangeMinOption = (event) => {
    const value = Number(event.target.value);
    selectHandler(event);
    setMinPrice(value);
  };

  const onChangeMaxOption = (event) => {
    const value = Number(event.target.value);
    selectHandler(event);
    setMaxPrice(value);
  };

  return (
    <div className="Filter PriceFilter">
      <h3>Price</h3>
      <div>
        <Select onChangeOption={onChangeMinOption} name="minPriceSelector">
          {minPricesOptions}
        </Select>
        <span>to</span>
        <Select onChangeOption={onChangeMaxOption} name="maxPriceSelector">
          {maxPricesOptions}
        </Select>
      </div>
    </div>
  );
};

PriceFilter.propTypes = {
  selectHandler: propTypes.func.isRequired
};

export default PriceFilter;

// <select onChange={onChangeMinOption} name="minPriceSelector">
//           <option value={null}>Min</option>
//           {minPricesOptions}
//           <option value={0}>0</option>
//           <option value={500}>500</option>
//           <option value={1000}>1000</option>
//           <option value={1500}>1500</option>
//           <option value={2000}>2000</option>
//           <option value={2500}>2500</option>
//           <option value={3000}>3000</option>
//           <option value={3500}>3500</option>
//           <option value={4000}>4000</option>
//         </select>
//         <span>to</span>
//         <select onChange={onChangeMaxOption} name="maxPriceSelector">
//           <option value={null}>Max</option>
//           {maxPricesOptions}
//           <option value={500}>500</option>
//           <option value={1000}>1000</option>
//           <option value={1500}>1500</option>
//           <option value={2000}>2000</option>
//           <option value={2500}>2500</option>
//           <option value={3000}>3000</option>
//           <option value={3500}>3500</option>
//           <option value={4000}>4000</option>
//           <option value={4001}>4000+</option>
//         </select>
