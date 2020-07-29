import React, { Component } from 'react';
import propTypes from 'prop-types';
import Grid from '../../components/layout/Grid/Grid';
import SideBar from '../../components/layout/SideBar/SideBar';
import Sort from '../../components/Sort/Sort';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      minPrice: null,
      maxPrice: null,
      shoesLength: null,
      searchTerm: '',
      colors: {
        blue: false,
        red: false,
        white: false,
        black: false,
        green: false,
        brown: false
      },
      eventFired: false,
      sortBy: ''
    };
    this.shoes = [];
  }

  componentDidMount() {
    const { shoes } = this.props;
    this.setState((prevState) => ({
      ...prevState, shoes
    }));
  }

  filterShoes = () => {
    const { shoes } = this.state;
    let filteredShoes = this.filterByPrice(shoes);
    filteredShoes = this.filterByBrand(filteredShoes);
    filteredShoes = this.filterByColor(filteredShoes);
    this.shoes = [...filteredShoes];
    return filteredShoes;
  }

  filterByPrice = (shoes) => {
    const { minPrice, maxPrice } = this.state;
    if (minPrice && !maxPrice) {
      return shoes.filter((shoe) => shoe.price > minPrice);
    }
    if (!minPrice && maxPrice) {
      return shoes.filter((shoe) => shoe.price < maxPrice);
    }
    if (minPrice && maxPrice) {
      if (maxPrice <= 4000) {
        return shoes.filter((shoe) => shoe.price > minPrice && shoe.price < maxPrice);
      }
      return shoes.filter((shoe) => shoe.price > minPrice);
    }
    return shoes;
  }

  filterByBrand = (shoes) => {
    const { searchTerm } = this.state;
    return shoes.filter((shoe) => shoe.brand.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  filterByColor = (shoes) => {
    const { colors } = this.state;
    const checkedColors = Object.keys(colors).filter((color) => colors[color] === true);
    const filteredShoes = [];
    const isAllColorsUnchecked = Object.values(colors).every((value) => value === false);
    if (isAllColorsUnchecked) {
      filteredShoes.push(...shoes);
    } else {
      checkedColors.forEach((checkedColor) => {
        const filtered = shoes.filter(
          (shoe) => shoe.color.toLowerCase() === checkedColor.toLowerCase()
        );
        filteredShoes.push(...filtered);
      });
    }
    return filteredShoes;
  }

  selectPriceHandler = (event) => {
    const priceSelector = event.target.name;
    const price = Number(event.target.value);
    this.setState((prevState) => ({
      ...prevState, eventFired: true, sortBy: ''
    }));
    setTimeout(() => {
      if (priceSelector === 'minPriceSelector') {
        this.setState((prevState) => ({
          ...prevState,
          minPrice: price,
          eventFired: false
        }));
      } else if (priceSelector === 'maxPriceSelector') {
        this.setState((prevState) => ({
          ...prevState,
          maxPrice: price,
          eventFired: false
        }));
      }
    }, 500);
  };

  searchBrandHandler = (event) => {
    const searchTerm = event.target.value;
    this.setState((prevState) => ({
      ...prevState, eventFired: true, sortBy: ''
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState, searchTerm, eventFired: false
      }));
    }, 500);
  }

  checkedColorsHandler = (event) => {
    const { name } = event.target;
    const { colors } = this.state;
    this.setState((prevState) => ({
      ...prevState, eventFired: true, sortBy: ''
    }));
    setTimeout(() => {
      if (colors[name]) {
        this.setState((prevState) => ({
          ...prevState,
          colors: { ...prevState.colors, [name]: false },
          eventFired: false
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          colors: { ...prevState.colors, [name]: true },
          eventFired: false
        }));
      }
    }, 500);
  }

  sortByPriceAscending = () => {
    this.shoes.sort((a, b) => a.price - b.price);
  }

  sortByPriceDescending = () => {
    this.shoes.sort((a, b) => b.price - a.price);
  }

  sortButtonsHandler = (event) => {
    const { name } = event.target;
    // eslint-disable-next-line no-console
    console.log(name);
    if (name === 'ascending') {
      this.sortByPriceAscending();
    }
    if (name === 'descending') {
      this.sortByPriceDescending();
    }
    this.setState((prevState) => ({
      ...prevState, sortBy: name
    }));
  }

  buyButtonHandler = (event) => {
    const { buyShoe } = this.props;
    const { name } = event.target;
    const id = Number(name);
    buyShoe(id);
  }

  render() {
    const { eventFired, sortBy } = this.state;
    const shoes = sortBy ? this.shoes : this.filterShoes();
    return (
      <div className="HomePage">
        <SideBar
          selectHandler={this.selectPriceHandler}
          searchHandler={this.searchBrandHandler}
          checkedHandler={this.checkedColorsHandler}
        />
        <div className="MainArea">
          <Sort sortHandler={this.sortButtonsHandler} />
          <Grid clickHandler={this.buyButtonHandler} shoes={shoes} eventFired={eventFired} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  shoes: propTypes.instanceOf(Array).isRequired,
  buyShoe: propTypes.func.isRequired
};

export default HomePage;
