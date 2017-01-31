import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Sidebar from '../../src/routes/country/sidebar';

let country = {
  info: {
    name: 'Canada',
    data: {
      info: 'The country is\n Canada',
      image: 'http://i.imgur.com/soxFIvz.jpg',
      source: 'Copyright Imgur',
      link: 'http://wikipedia.org'
    }
  },
  cities: ['Toronto', 'Ottawa']
};

let component;

describe('Country Sidebar', () => {
  component = shallow(<Sidebar country={country} />);

  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('renders a Link to /location/Ottawa', () => {
    const cityLink = component.find('Link').first();
    expect(cityLink.props().to).toEqual('/location/Ottawa');
  });
});