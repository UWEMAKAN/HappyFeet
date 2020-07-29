import React from 'react';
import { shallow } from 'enzyme';
import CreditCard from './CreditCard';

const renderCreditCard = () => shallow(<CreditCard />);

describe('CreditCard Component', () => {
  test('should render CreditCard Component', () => {
    const wrapper = renderCreditCard();
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});
