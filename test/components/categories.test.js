import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';

import Categories from '../../src/routes/categories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let storeStateMock = {
  explorer: {
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

describe('Categories', () => {
  store = mockStore(storeStateMock);
  component = mount(<Categories store={store} />);

  const categories = component.find('.row').first().find('Link');

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
    expect(title).toEqual('Global Categories');
  });

  describe('Category Links', () => {
    it('renders 3 category links', () => {
      expect(categories.length).toEqual(3);
    });

    it('Bridge links to /location/bridge', () => {
      expect(categories.first().props().to).toEqual('/location/bridge');
    });

    it('Bridge contains an image', () => {
      expect(categories.first().find('img').length).toEqual(1);
    });
  });
});