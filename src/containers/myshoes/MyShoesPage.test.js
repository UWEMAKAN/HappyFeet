import React from 'react';
import { shallow } from 'enzyme';
import MyShoesPage from './MyShoesPage';
import { shoes } from '../../../tools/mockData';

const renderMyShoesPage = (args) => {
  const defaultProps = {
    myShoes: []
  };
  const props = { ...defaultProps, ...args };
  return shallow(<MyShoesPage myShoes={props.myShoes} />);
};

describe('MyShoesPage Component', () => {
  test('should render MyShoesPage Component', () => {
    const myShoes = [shoes[0], shoes[1]];
    const wrapper = renderMyShoesPage({ myShoes });
    expect.assertions(5);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h2').text()).toEqual('My Shoes');
    expect(wrapper.getElements()[0].props.children.props.children.length).toBe(2);
    expect(wrapper.getElements()[0].props.children.props.children[0].type).toEqual('h2');
    expect(wrapper.getElements()[0].props.children.props.children[1].props.children.length).toBe(2);
  });
});
