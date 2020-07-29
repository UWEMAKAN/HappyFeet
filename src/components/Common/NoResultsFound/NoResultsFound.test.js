import React from 'react';
import { shallow } from 'enzyme';
import NoResultsFound from './NoResultsFound';

const renderNoResultsFound = (args) => {
  const defaultProps = {
    message: ''
  };
  const props = { ...defaultProps, ...args };
  return shallow(<NoResultsFound message={props.message} />);
};

test('should render NoResultsFound', () => {
  const message = 'No Results Found';
  const wrapper = renderNoResultsFound({ message });
  expect.assertions(2);
  expect(wrapper.text()).toEqual('No Results Found');
  expect(wrapper).toMatchSnapshot();
});
