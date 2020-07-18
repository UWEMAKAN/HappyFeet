import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

const Button = ({ styles, text }) => (
  <div style={styles} className="ButtonWrapper">
    <button className="Button" type="button">
      {text}
    </button>
  </div>
);

Button.propTypes = {
  //   // onClick: propTypes.func.isRequired
  styles: propTypes.instanceOf(Object).isRequired,
  text: propTypes.string.isRequired
};

export default Button;
