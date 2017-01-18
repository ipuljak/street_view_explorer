import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';

import Countries from '../../src/routes/countries';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let storeStateMock = {
  streetView: {
    types: {
      type: [
        {
          name: 'Bridge',
          data: {
            image: 'http://i.imgur.com/soxFIvz.jpg'
          }
        },
        {
          name: 'Castle',
          data: {
            image: 'http://i.imgur.com/soxFIvz.jpg'
          }
        },
        {
          name: 'Park',
          data: {
            image: 'http://i.imgur.com/soxFIvz.jpg'
          }
        }
      ],
      country: [
        {
          name: 'Canada',
          data: {
            image: 'http://i.imgur.com/soxFIvz.jpg'
          }
        },
        {
          name: 'Italy',
          data: {
            image: 'http://i.imgur.com/soxFIvz.jpg'
          }
        },
        {
          name: 'United States',
          data: {
            image: 'http://i.imgur.com/soxFIvz.jpg'
          }
        }
      ],
    }
  }
};

let store, component;

describe('Countries', () => {
  store = mockStore(storeStateMock);
  component = mount(<Countries store={store} />);

  const countries = component.find('.row').first().find('Link');

  it('renders the container', () => {
    expect(component).toBeDefined();
  });

  it('contains a footer', () => {
    expect(component.find('Footer').length).toEqual(1);
  });

  it('scrolled to the top when it was loaded', () => {
    expect(window.scrollY).toEqual(0);
  });

  it('has the correct title', () => {
    const title = component.find('h2').first().props().children;
    expect(title).toEqual('Countries of the World');
  });

  describe('Country Links', () => {
    it('renders 3 country links', () => {
      expect(countries.length).toEqual(3);
    });

    it('Canada links to /country/Canada', () => {
      expect(countries.first().props().to).toEqual('/country/Canada');
    });

    it('Canada contains an image', () => {
      expect(countries.first().find('img').length).toEqual(1);
    });
  });
});