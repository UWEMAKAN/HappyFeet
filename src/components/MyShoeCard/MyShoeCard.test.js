import React from 'react';
import { shallow } from 'enzyme';
import MyShoeCard from './MyShoeCard';

const renderMyShoeCard = (args) => {
  const defaultProps = {
    image: '',
    title: '',
    color: '',
    seller: '',
    price: ''
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<MyShoeCard {...props} />);
};

describe('MyShoeCard Component', () => {
  test('should render MyShoeCard Component', () => {
    const image = 'http://localhost:3001/assets/images/image.jpg';
    const title = 'Nike White Snickers for Men and Women';
    const color = 'black';
    const seller = 'RetailNet';
    const price = 3500;
    const wrapper = renderMyShoeCard({
      image, title, color, seller, price
    });

    expect.assertions(2);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.getElements()[0].props.children.length).toBe(2);
  });
});
