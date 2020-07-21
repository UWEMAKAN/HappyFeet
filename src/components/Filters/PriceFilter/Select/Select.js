import React from 'react';
import propTypes from 'prop-types';

const Select = (props) => {
  const { onChangeOption, name, children } = props;
  return (
    <select onChange={onChangeOption} name={name}>
      {children}
    </select>
  );
};

Select.propTypes = {
  onChangeOption: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

export default Select;
