import React from 'react';
import { shallow } from 'enzyme';
import BrandFilter from './BrandFilter';

const renderBrandFilter = (args) => {
  const props = { ...args };
  return shallow(<BrandFilter searchHandler={props.searchHandler} />);
};

describe('BrandFilter Component', () => {
  test('should render BrandFilter', () => {
    const searchHandler = jest.fn();
    const wrapper = renderBrandFilter({ searchHandler });
    wrapper.find('input').simulate('change');
    expect.assertions(4);
    expect(wrapper.find('h3').text()).toEqual('Brand');
    expect(wrapper.find('span').text()).toEqual('search brand');
    expect(searchHandler).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
