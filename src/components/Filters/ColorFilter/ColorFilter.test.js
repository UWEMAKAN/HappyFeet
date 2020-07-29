import React from 'react';
import { shallow } from 'enzyme';
import ColorFilter from './ColorFilter';

const renderColorFilter = (args) => {
  const defaultProps = {
    checkedHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ColorFilter checkedHandler={props.checkedHandler} />);
};

describe('ColorFilter Component', () => {
  test('should render ColorFilter Component', () => {
    const checkedHandler = jest.fn();
    const wrapper = renderColorFilter({ checkedHandler });
    expect.assertions(3);
    expect(wrapper.find('h3').text()).toEqual('Color');
    expect(wrapper.getElements()[0].props.children[1].length).toBe(6);
    expect(wrapper).toMatchSnapshot();
  });
});
