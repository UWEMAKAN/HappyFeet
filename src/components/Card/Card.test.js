import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const renderCard = (args) => {
  const defaultProps = {
    title: '',
    image: '',
    price: 0,
    discount: 0,
    rating: 0,
    clickHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Card {...props} />);
};

describe('Card Component', () => {
  const title = 'Black Leather Shoes';
  const image = 'http://localhost:3001/assets/images/image.jpg';
  const price = 4000;
  const discount = 30;
  const rating = 4.6;
  const clickHandler = jest.fn();

  test('should render Card', () => {
    const wrapper = renderCard({
      title, image, price, discount, rating, clickHandler
    });
    expect.assertions(2);
    expect(wrapper.getElements()[0].props.children.length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });
});
