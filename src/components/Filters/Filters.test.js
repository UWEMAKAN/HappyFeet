import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

const renderFilters = (args) => {
  const defaultProps = {
    selectHandler: jest.fn(),
    checkedHandler: jest.fn(),
    searchHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Filters {...props} />);
};

describe('Filters Component', () => {
  test('should render Filters Compponent', () => {
    const wrapper = renderFilters();
    expect.assertions(3);
    expect(wrapper.find('h2').text()).toEqual('Filters');
    expect(wrapper.getElements()[0].props.children.length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });
});
