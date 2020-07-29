import React from 'react';
import { shallow } from 'enzyme';
import PaymentsPage from './PaymentsPage';
import { shoes } from '../../../tools/mockData';

const renderPaymentsPage = (args) => {
  const defaultProps = {
    shoe: {},
    addToMyShoes: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<PaymentsPage {...props} />);
};

describe('PaymentsPage Component', () => {
  test('should render PaymentsPage Component', () => {
    const shoe = shoes[0];
    const addToMyShoes = jest.fn();
    const wrapper = renderPaymentsPage({ shoe, addToMyShoes });
    expect.assertions(3);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h2').text()).toEqual('Make Payments');
    expect(wrapper.getElements()[0].props.children.props.children.length).toBe(2);
  });

  test('should render NoResults Found when there is no shoe to render', () => {
    const wrapper = renderPaymentsPage();
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});
