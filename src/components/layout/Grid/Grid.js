import React from 'react';
import propTypes from 'prop-types';
import Card from '../../Card/Card';

import './Grid.css';

const Grid = ({ shoes }) => {
  const shoesCards = shoes.map((shoe) => (
    <Card
      key={shoe.id}
      image={shoe.image}
      title={shoe.title}
      price={shoe.price}
      discount={shoe.discount}
      rating={shoe.rating}
    />
  ));

  return (
    <div className="Grid">
      {shoesCards}
    </div>
  );
};

Grid.propTypes = {
  shoes: propTypes.instanceOf(Array).isRequired
};

export default Grid;
