import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import CountryView from '../../src/routes/country/components/country_view_component';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// let storeStateMock = {
//   streetView: {
//     country: {
//       name: 'Canada',
//       cities: [
//         'Toronto', 'Ottawa'
//       ],
//       data: {
//         info: 'The country is Canada',
//         image: 'http://i.imgur.com/soxFIvz.jpg',
//         source: 'Copyright Imgur',
//         link: 'http://wikipedia.org'
//       }
//     }
//   },
//   params: {
//     country: 'Canada'
//   }
// };

let props = {
  country: {
    country: 'Canada',
    name: 'Canada',
    data: {
      info: 'The country is\n Canada',
      image: 'http://i.imgur.com/soxFIvz.jpg',
      source: 'Copyright Imgur',
      link: 'http://wikipedia.org'
    }
  },
  cities: [
    'Toronto', 'Ottawa'
  ]
};

let component;

describe('Country', () => {
  component = shallow(<CountryView props={props} />);

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

  it('rendered two City tags', () => {
    expect(component.find('City').length).toEqual(2);
  });

  it('rendered a city tag to Toronto', () => {
    const city = component.findWhere(n => n.props().name === 'Toronto');
    expect(city.length).toEqual(1);
  });
});
