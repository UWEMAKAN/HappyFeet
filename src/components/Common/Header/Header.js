import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  const activeStyle = {
    color: '#209CEE'
  };

  const styles = {
    fontSize: '3rem',
    textDecoration: 'none'
  };

  return (
    <nav classes={classes.Nav}>
      <NavLink to="/" style={styles} activeStyle={activeStyle} exact>Home</NavLink>
      {' | '}
      <NavLink to="/myshoes" style={styles} activeStyle={activeStyle}>My Shoes</NavLink>
    </nav>
  );
};

export default Header;
