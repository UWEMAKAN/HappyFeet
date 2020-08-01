/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import {
  cleanup, fireEvent, render, act
} from '@testing-library/react';
import HomePage, { selectPriceHandler, searchBrandHandler, checkedColorsHandler } from './HomePage';
import { shoes } from '../../../tools/mockData';

const shallowRenderHomePage = (args) => {
  const defaultProps = {
    shoes,
    buyShoe: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  return shallow(<HomePage {...props} />);
};

const renderReactComponent = async (args) => {
  const defaultProps = {
    shoes,
    buyShoe: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  return render(<MemoryRouter><HomePage {...props} /></MemoryRouter>);
};

describe('HomePage Component Shallow Rendered', () => {
  test('should render HomePage Component', () => {
    const wrapper = shallowRenderHomePage();
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('HomePage Component Mounted', () => {
  afterEach(cleanup);
  test('should fire the click event on the ascending order button', async () => {
    const { container } = await renderReactComponent();
    const name = 'ascending';
    const button = container.querySelector('button[name="ascending"]');
    act(() => {
      fireEvent.click(button, { target: { name } });
    });
    expect.assertions(1);
    expect(button).toBeTruthy();
  });

  test('should fire the click event on the descending order button', async () => {
    const { container } = await renderReactComponent();
    const name = 'descending';
    const button = container.querySelector('button[name="descending"]');
    act(() => {
      fireEvent.click(button, { target: { name } });
    });
    expect.assertions(1);
    expect(button).toBeTruthy();
  });

  test('should fire the click event on the buy button', async () => {
    const buyShoe = jest.fn();
    const { container } = await renderReactComponent({ buyShoe });
    const name = '1';
    const button = container.querySelector('button[name="1"]');
    act(() => {
      fireEvent.click(button, { target: { name } });
    });
    expect.assertions(1);
    expect(buyShoe).toHaveBeenCalledTimes(1);
  });
});

describe('Testing selectPriceHandler', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('should call setEventFired, setSortBy, setMinPrice', () => {
    jest.useFakeTimers();
    const setEventFired = jest.fn();
    const setSortBy = jest.fn();
    const setMinPrice = jest.fn();
    const setMaxPrice = jest.fn();
    const name = 'minPriceSelector';
    const value = '2000';
    const event = { target: { value, name } };
    const selectHandler = selectPriceHandler(setEventFired, setSortBy, setMinPrice, setMaxPrice);
    selectHandler(event);
    jest.runAllTimers();
    expect.assertions(4);
    expect(setEventFired).toHaveBeenCalledTimes(2);
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setMinPrice).toHaveBeenCalledTimes(1);
    expect(setMaxPrice).toHaveBeenCalledTimes(0);
  });

  test('should call setEventFired, setSortBy, setMaxPrice', () => {
    jest.useFakeTimers();
    const setEventFired = jest.fn();
    const setSortBy = jest.fn();
    const setMinPrice = jest.fn();
    const setMaxPrice = jest.fn();
    const name = 'maxPriceSelector';
    const value = '3000';
    const event = { target: { value, name } };
    const selectHandler = selectPriceHandler(setEventFired, setSortBy, setMinPrice, setMaxPrice);
    selectHandler(event);
    jest.runAllTimers();
    expect.assertions(4);
    expect(setEventFired).toHaveBeenCalledTimes(2);
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setMinPrice).toHaveBeenCalledTimes(0);
    expect(setMaxPrice).toHaveBeenCalledTimes(1);
  });
});

describe('Testing searchBrandHandler', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('should call setEventFired, setSortBy, setSearchTerm', () => {
    jest.useFakeTimers();
    const setEventFired = jest.fn();
    const setSortBy = jest.fn();
    const setSearchTerm = jest.fn();
    const name = 'search';
    const value = 'ni';
    const event = { target: { value, name } };
    const searchHandler = searchBrandHandler(setEventFired, setSortBy, setSearchTerm);
    searchHandler(event);
    jest.runAllTimers();
    expect.assertions(3);
    expect(setEventFired).toHaveBeenCalledTimes(2);
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setSearchTerm).toHaveBeenCalledTimes(1);
  });
});

describe('Testing checkedColorHandler', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('should call setEventFired, setSortBy, setColors', () => {
    jest.useFakeTimers();
    const colors = {
      blue: false,
      red: false,
      white: false,
      black: false,
      green: false,
      brown: false
    };
    const setEventFired = jest.fn();
    const setSortBy = jest.fn();
    const setColors = jest.fn();
    const name = 'black';
    const event = { target: { name } };
    const checkedHandler = checkedColorsHandler(setEventFired, setSortBy, setColors, colors);
    checkedHandler(event);
    jest.runAllTimers();
    expect.assertions(3);
    expect(setEventFired).toHaveBeenCalledTimes(2);
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setColors).toHaveBeenCalledTimes(1);
  });

  test('should call setEventFired, setSortBy, setColors', () => {
    jest.useFakeTimers();
    const colors = {
      blue: true,
      red: false,
      white: false,
      black: false,
      green: false,
      brown: false
    };
    const setEventFired = jest.fn();
    const setSortBy = jest.fn();
    const setColors = jest.fn();
    const name = 'blue';
    const event = { target: { name } };
    const checkedHandler = checkedColorsHandler(setEventFired, setSortBy, setColors, colors);
    checkedHandler(event);
    jest.runAllTimers();
    expect.assertions(3);
    expect(setEventFired).toHaveBeenCalledTimes(2);
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setColors).toHaveBeenCalledTimes(1);
  });
});
