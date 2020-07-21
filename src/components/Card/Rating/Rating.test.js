import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

const renderRating = (args) => {
  const defaultProps = {
    rating: 0
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Rating rating={props.rating} />);
};

describe('Rating Component', () => {
  test('should render Rating Component', () => {
    const rating = 4.5;
    const wrapper = renderRating({ rating });
    expect.assertions(2);
    expect(wrapper.find('span').text()).toEqual('4.5');
    expect(wrapper).toMatchSnapshot();
  });
});
