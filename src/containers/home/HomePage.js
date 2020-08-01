import React, { useState } from 'react';
import propTypes from 'prop-types';
import Grid from '../../components/layout/Grid/Grid';
import SideBar from '../../components/layout/SideBar/SideBar';
import Sort from '../../components/Sort/Sort';
import { sortShoes } from './utils';
import './HomePage.css';

export const selectPriceHandler = (
  setEventFired, setSortBy, setMinPrice, setMaxPrice
) => (event) => {
  const priceSelector = event.target.name;
  const price = Number(event.target.value);
  setEventFired(true);
  setSortBy('');
  setTimeout(() => {
    if (priceSelector === 'minPriceSelector') {
      setMinPrice(price);
    }
    if (priceSelector === 'maxPriceSelector') {
      setMaxPrice(price);
    }
    setEventFired(false);
  }, 500);
};

export const searchBrandHandler = (setEventFired, setSortBy, setSearchTerm) => (event) => {
  const search = event.target.value;
  setEventFired(true);
  setSortBy('');
  setTimeout(() => {
    setSearchTerm(search);
    setEventFired(false);
  }, 500);
};

export const checkedColorsHandler = (setEventFired, setSortBy, setColors, colors) => (event) => {
  const { name } = event.target;
  setEventFired(true);
  setSortBy('');
  setTimeout(() => {
    if (colors[name]) {
      setColors({ ...colors, [name]: false });
    } else {
      setColors({ ...colors, [name]: true });
    }
    setEventFired(false);
  }, 500);
};

const HomePage = ({ shoes, buyShoe }) => {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [eventFired, setEventFired] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [colors, setColors] = useState({
    blue: false,
    red: false,
    white: false,
    black: false,
    green: false,
    brown: false
  });

  const selectHandler = selectPriceHandler(setEventFired, setSortBy, setMinPrice, setMaxPrice);
  const searchHandler = searchBrandHandler(setEventFired, setSortBy, setSearchTerm);
  const checkedHandler = checkedColorsHandler(setEventFired, setSortBy, setColors, colors);

  const sortButtonsHandler = (event) => {
    const { name } = event.target;
    setSortBy(name);
  };

  const buyButtonHandler = (event) => {
    const { name } = event.target;
    const id = Number(name);
    buyShoe(id);
  };

  const shoesToRender = sortShoes(shoes, sortBy, minPrice, maxPrice, searchTerm, colors);
  return (
    <div className="HomePage">
      <SideBar
        selectHandler={selectHandler}
        searchHandler={searchHandler}
        checkedHandler={checkedHandler}
      />
      <div className="MainArea">
        <Sort sortHandler={sortButtonsHandler} />
        <Grid clickHandler={buyButtonHandler} shoes={shoesToRender} eventFired={eventFired} />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  shoes: propTypes.instanceOf(Array).isRequired,
  buyShoe: propTypes.func.isRequired
};

export default HomePage;
