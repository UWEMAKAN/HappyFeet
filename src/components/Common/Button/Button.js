import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Button.css';

const Button = ({
  name, styles, text, clickHandler, link
}) => (
  <div style={styles} className="ButtonWrapper">
    <Link to={link}>
      <button name={name} onClick={clickHandler} className="Button" type="button">
        {text}
      </button>
    </Link>
  </div>
);

Button.propTypes = {
  clickHandler: propTypes.func.isRequired,
  styles: propTypes.instanceOf(Object).isRequired,
  text: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired
};

export default Button;
