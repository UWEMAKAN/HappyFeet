import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import propTypes from 'prop-types';

import './Rating.css';

const Rating = ({ rating }) => (
  <div className="Rating">
    <span>{rating}</span>
    <AiFillStar />
  </div>
);

Rating.propTypes = {
  rating: propTypes.number.isRequired
};

export default Rating;
