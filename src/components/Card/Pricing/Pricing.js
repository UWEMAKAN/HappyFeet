import React from 'react';
import propTypes from 'prop-types';
import './Pricing.css';

const Pricing = ({ price, discount }) => {
  const originalPrice = Math.ceil(price / (1 - (discount / 100)));
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div className="Pricing">
      <span>{`${formatter.format(price)}`.split('.')[0]}</span>
      <span>{`${formatter.format(originalPrice)}`.split('.')[0]}</span>
      <span>{`${discount}% off`}</span>
    </div>
  );
};

Pricing.propTypes = {
  price: propTypes.number.isRequired,
  discount: propTypes.number.isRequired
};

export default Pricing;
