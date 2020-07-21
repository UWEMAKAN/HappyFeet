import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const renderHeader = () => shallow(<Header />);

test('should render Header', () => {
  const wrapper = renderHeader();
  expect.assertions(2);
  expect(wrapper.find('nav').length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
