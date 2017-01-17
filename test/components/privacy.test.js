import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Privacy from '../../src/routes/footer/privacy';

let component;

describe('Privacy', () => {
  component = shallow(<Privacy />);

  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('contains a privacy policy', () => {
    expect(component.find('h1').first().text()).toEqual('Privacy Policy');
  });

  it('has a footer', () => {
    expect(component.find('Footer').length).toEqual(1);
  });
});