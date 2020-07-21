import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

const renderColor = (args) => {
  const defaultProps = {
    name: '',
    color: '',
    checkedHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Color {...props} />);
};

describe('Color Component', () => {
  test('should render Color Component', () => {
    const name = 'blue';
    const color = 'blue';
    const checkedHandler = jest.fn();
    const wrapper = renderColor({ name, color, checkedHandler });
    wrapper.find('input').simulate('change');

    expect.assertions(2);
    expect(checkedHandler).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
