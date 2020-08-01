import React from 'react';
// import fetchMock from 'fetch-mock';
// import {
//   cleanup, fireEvent, render, act
// } from '@testing-library/react';
import { shallow } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
import RootContainer, { buyShoeHandler, myShoesHandler } from './RootContainer';
import { shoes } from '../../../tools/mockData';

describe('RootContainer Component', () => {
  test('should render RootContainer Component', () => {
    const wrapper = shallow(<RootContainer />);
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  // describe('Test useEffect', () => {
  //   afterEach(() => {
  //     jest.useRealTimers();
  //   });

  // //   test('should render RootContainer Component', async (done) => {
  // //     fetchMock.mock('*', {
  // //       body: shoes,
  // //       headers: { 'content-type': 'application/json' }
  // //     });
  // //     await act(async () => {
  // //       const container = mount(<MemoryRouter><RootContainer /></MemoryRouter>);
  // //     });
  // //     jest.useFakeTimers();
  // //     jest.runAllImmediates();
  // //   });
  // });

  // test('should render RootContainer Component', (done) => {
  //   global.fetch = fetchMock.mock('*', {
  //     body: shoes,
  //     headers: { 'content-type': 'application/json' }
  //   });
  //   let container;
  //   jest.useFakeTimers();
  //   act(() => {
  //     container = render(<MemoryRouter><RootContainer /></MemoryRouter>);
  //   });
  //   setImmediate(done);
  //   jest.runAllImmediates();
  // });
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
