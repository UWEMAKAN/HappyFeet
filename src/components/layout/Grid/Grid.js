import React from 'react';
import propTypes from 'prop-types';
import Card from '../../Card/Card';
import NoResultsFound from '../../Common/NoResultsFound/NoResultsFound';
import './Grid.css';
import Spinner from '../../Common/Spinner/Spinner';

const Grid = ({ shoes, eventFired, clickHandler }) => {
  const shoesCards = shoes.map((shoe) => (
    <Card
      id={`${shoe.id}`}
      key={shoe.id}
      image={shoe.image}
      title={shoe.title}
      price={shoe.price}
      discount={shoe.discount}
      rating={shoe.rating}
      clickHandler={clickHandler}
    />
  ));

  let returnValue;
  if (eventFired) {
    returnValue = <Spinner />;
  } else {
    returnValue = shoes.length ? <div className="Grid">{shoesCards}</div> : <NoResultsFound message="No Results Found" />;
  }

  return (
    <>
      {returnValue}
    </>
  );
};

Grid.propTypes = {
  shoes: propTypes.instanceOf(Array).isRequired,
  eventFired: propTypes.bool.isRequired,
  clickHandler: propTypes.func.isRequired
};

export default Grid;
