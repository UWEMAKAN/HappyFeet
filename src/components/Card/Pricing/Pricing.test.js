import React from 'react';
import { shallow } from 'enzyme';
import Pricing from './Pricing';

const renderPricing = (args) => {
  const defaultProps = {
    price: 0,
    discount: 0
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Pricing {...props} />);
};

describe('Pricing', () => {
  test('should render Pricing Component', () => {
    const price = 3500;
    const discount = 30;
    const wrapper = renderPricing({ price, discount });
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});
