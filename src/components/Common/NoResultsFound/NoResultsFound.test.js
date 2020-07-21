import React from 'react';
import { shallow } from 'enzyme';
import NoResultsFound from './NoResultsFound';

const renderNoResultsFound = () => shallow(<NoResultsFound />);

test('should render NoResultsFound', () => {
  const wrapper = renderNoResultsFound();
  expect.assertions(2);
  expect(wrapper.text()).toEqual('No Results Found');
  expect(wrapper).toMatchSnapshot();
});
