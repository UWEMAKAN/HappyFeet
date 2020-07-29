import React from 'react';
import propTypes from 'prop-types';
import './NoResultsFound.css';

const NoResultsFound = ({ message }) => <div className="NoResultsFound">{message}</div>;

NoResultsFound.propTypes = {
  message: propTypes.string.isRequired
};

export default NoResultsFound;
