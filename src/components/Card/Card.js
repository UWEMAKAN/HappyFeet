import React from 'react';
import propTypes from 'prop-types';
import Button from '../Common/Button/Button';
import Image from '../Common/Image/Image';
import Rating from './Rating/Rating';
import './Card.css';
import Pricing from './Pricing/Pricing';

const Card = ({
  title, image, price, discount, rating, clickHandler
}) => (
  <div className="Card">
    <Image title={title} image={image} />
    <Button text="Buy" styles={{ marginRight: '1rem' }} clickHandler={clickHandler} />
    <h3 className="Title">{title}</h3>
    <Rating rating={rating} />
    <Pricing price={price} discount={discount} />
  </div>
);

Card.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  discount: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  clickHandler: propTypes.func.isRequired
};

export default Card;
