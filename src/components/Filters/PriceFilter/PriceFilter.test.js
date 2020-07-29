import React from 'react';
import { shallow } from 'enzyme';
import PriceFilter from './PriceFilter';

const renderPriceFilter = (args) => {
  const defaultProps = {
    selectHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  return shallow(<PriceFilter selectHandler={props.selectHandler} />);
};

describe('PriceFilter Component', () => {
  test('should render PriceFilter Component', () => {
    const selectHandler = jest.fn();
    const wrapper = renderPriceFilter({ selectHandler });
    expect.assertions(3);
    expect(wrapper.find('h3').text()).toEqual('Price');
    expect(wrapper.getElements()[0].props.children[1].props.children.length).toBe(3);
    expect(wrapper).toMatchSnapshot();
  });
});
