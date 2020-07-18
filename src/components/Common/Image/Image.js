import React from 'react';
import propTypes from 'prop-types';

import './Image.css';

const Image = ({ image, title }) => (
  <img className="Image" src={image} alt={title} />
);

Image.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};

export default Image;
