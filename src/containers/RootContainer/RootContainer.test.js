import React from 'react';
import fetchMock from 'fetch-mock';
// import {
//   cleanup, fireEvent, render, act
// } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RootContainer, { buyShoeHandler, myShoesHandler } from './RootContainer';
import { shoes } from '../../../tools/mockData';

const mockSetState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial) => [initial, mockSetState]
}));

describe('RootContainer Component', () => {
  test('should render RootContainer Component', () => {
    const wrapper = shallow(<RootContainer />);
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Test useEffect', () => {
    test('should render RootContainer Component', () => {
      fetchMock.mock(`${process.env.API_URL}/shoes/`, {
        body: shoes,
        headers: { 'content-type': 'application/json' }
      });
      mount(<MemoryRouter><RootContainer /></MemoryRouter>);
    });

    test('should render RootContainer Component', () => {
      fetchMock.mock('*', { throws: Error('Network Connectivity Error') });
      mount(<MemoryRouter><RootContainer /></MemoryRouter>);
    });
  });
});

describe('Testing Helpers', () => {
  test('should call setShoe when the function returned by calling buyShoeHandler is execute', () => {
    const setShoe = jest.fn();
    const buyShoe = buyShoeHandler(shoes, setShoe);
    buyShoe(2);
    expect.assertions(1);
    expect(setShoe).toHaveBeenCalledTimes(1);
  });

  test('should call setShoe when the function returned by calling buyShoeHandler is execute', () => {
    const myShoes = [];
    const setMyShoes = jest.fn();
    const setShoe = jest.fn();
    const addToMyShoes = myShoesHandler(myShoes, setMyShoes, setShoe);
    addToMyShoes(shoes[2]);
    expect.assertions(2);
    expect(setShoe).toHaveBeenCalledTimes(1);
    expect(setMyShoes).toHaveBeenCalledTimes(1);
  });
});
