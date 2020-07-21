import React from 'react';
import { shallow } from 'enzyme';
import Sort from './Sort';

const sortHandler = jest.fn();
const renderSort = () => shallow(<Sort sortHandler={sortHandler} />);

describe('Sort Component', () => {
  test('renders Sort component', () => {
    const wrapper = renderSort();
    expect.assertions(6);
    expect(wrapper.find('h2').text()).toEqual('Sort By');
    expect(wrapper.find('button').length).toBe(3);
    expect(wrapper.find('button').first().text()).toEqual('Relevance');
    expect(wrapper.find('button').at(1).text()).toEqual('Price - Low to High');
    expect(wrapper.find('button').last().text()).toEqual('Price - High to Low');
    expect(wrapper).toMatchSnapshot();
  });

  test('should call eventHandlers', () => {
    const wrapper = renderSort();
    expect.assertions();
    wrapper.find('button').first().simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').last().simulate('click');
    expect(sortHandler).toHaveBeenCalledTimes(3);
  });
});
