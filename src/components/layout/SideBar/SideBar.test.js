import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

const renderSideBar = (args) => {
  const defaultProps = {
    selectHandler: jest.fn(),
    searchHandler: jest.fn(),
    checkedHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<SideBar {...props} />);
};

describe('SideBar Component', () => {
  test('should render SideBar Component', () => {
    const wrapper = renderSideBar();
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});
