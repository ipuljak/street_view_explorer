import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import CountryView from '../../src/routes/country/country_view';

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

describe('Country', () => {
  component = shallow(<CountryView country={country} />);

  it('renders the container', () => {
    expect(component).toBeDefined();
  });

  it('shows the correct title', () => {
    const title = component.find('h2').first().props().children;
    expect(title).toEqual('Canada');
  });

  it('renders an image for the country', () => {
    expect(component.find('img').length).toEqual(1);
  });

  it('inserted a line break for the newline', () => {
    expect(component.find('br').length).toBeGreaterThan(0);
  });

  it('links to the correct data source', () => {
    const link = component.findWhere(n => n.props().href === 'http://wikipedia.org');
    expect(link.length).toEqual(1);
  });
});
