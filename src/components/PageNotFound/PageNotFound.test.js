import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

test('should render PageNotFound', () => {
  const wrapper = shallow(<PageNotFound />);
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});
