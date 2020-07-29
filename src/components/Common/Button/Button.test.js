import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const renderButton = (args) => {
  const defaultProps = {
    clickHandler: jest.fn(),
    styles: {},
    text: '',
    name: '',
    link: ''
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Button {...props} />);
};

describe('Button Component', () => {
  test('renders button component', () => {
    const text = 'Button';
    const name = '1';
    const link = '/';
    const clickHandler = jest.fn();
    const wrapper = renderButton({
      text, clickHandler, name, link
    });

    wrapper.find('button').simulate('click');

    expect.assertions(3);
    expect(wrapper.find('button').text()).toEqual('Button');
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
