import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Footer from '../../src/core/Footer';

let component;

describe('Footer', () => {
  component = shallow(<Footer />);
  const privacyPolicy = component.findWhere(n => n.props().to === '/privacy_policy');
    
  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('contains an actual footer', () => {
    expect(component.find('footer').length).toEqual(1);
  });

  it('renders a link to the privacy policy', () => {
    expect(privacyPolicy).toBeDefined();
  });

  it('link to privacy policy is named correctly', () => {
    expect(privacyPolicy.props().children).toEqual('Privacy Policy');
  });

  // Temporarily disabled
  // it('contains a copyright', () => {
  //   expect(component.find('.copyright').length).toEqual(1);
  // });
});

