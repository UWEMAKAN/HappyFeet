import React from 'react';
import propTypes from 'prop-types';
import './Option.css';

const Option = ({ value, disabled }) => <option value={value} disabled={disabled}>{value}</option>;

Option.propTypes = {
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]).isRequired,
  disabled: propTypes.bool.isRequired
};

export default Option;
