import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';
import { shoes } from '../../../../tools/mockData';

const renderGrid = (args) => {
  const defaultProps = {
    shoes: [],
    eventFired: false,
    clickHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Grid {...props} />);
};

describe('Grid Component', () => {
  test('should render Spinner when eventFired is true', () => {
    const eventFired = true;
    const wrapper = renderGrid({ shoes, eventFired });
    expect.assertions(2);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual('<Spinner />');
  });

  test('should render NoResultsFound when eventFired is false and shoes.length is 0', () => {
    const eventFired = false;
    const wrapper = renderGrid({ shoes: [], eventFired });
    expect.assertions(2);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual('<NoResultsFound />');
  });

  test('should render a list of Cards when eventFired is false and shoes.length is > 0', () => {
    const eventFired = false;
    const wrapper = renderGrid({ shoes, eventFired });
    // expect.assertions(2);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.getElements()[0].props.children.props.children.length).toBe(6);
  });
});
