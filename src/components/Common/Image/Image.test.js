import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

const renderImage = (args) => {
  const defaultProps = {
    image: '',
    title: ''
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Image {...props} />);
};

describe('Image Component', () => {
  test('should render image component', () => {
    const image = 'http://localhost:3001/assets/images/image.jpg';
    const title = 'Nike Black Snickers for men and women';
    const wrapper = renderImage({ image, title });

    expect.assertions(4);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.prop('src')).toEqual(image);
    expect(wrapper.prop('alt')).toEqual(title);
    expect(wrapper).toMatchSnapshot();
  });
});
