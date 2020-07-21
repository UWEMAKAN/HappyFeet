import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

const renderSpinner = () => shallow(<Spinner />);

test('should render Spinner', () => {
  const wrapper = renderSpinner();
  expect.assertions(2);
  expect(wrapper.text()).toEqual('Loading...');
  expect(wrapper).toMatchSnapshot();
});
