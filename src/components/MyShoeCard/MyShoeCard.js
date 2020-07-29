import React from 'react';
import propTypes from 'prop-types';
import Image from '../Common/Image/Image';
import './MyShoeCard.css';

const MyShoeCard = ({
  image, title, color, seller, price
}) => (
  <div className="MyShoeCard">
    <Image image={image} title={title} />
    <div className="Description">
      <div>
        <span>
          <strong>{title}</strong>
        </span>
        <span>
          Color:
          {' '}
          {color}
        </span>
        <span>
          Seller:
          {' '}
          {seller}
        </span>
      </div>
      <div className="Price">
        <strong>
          Rs.
          {' '}
          {price}
        </strong>
      </div>
    </div>
  </div>
);

MyShoeCard.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  seller: propTypes.string.isRequired,
  price: propTypes.number.isRequired
};

export default MyShoeCard;
