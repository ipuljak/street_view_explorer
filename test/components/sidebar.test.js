import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';

import Sidebar from '../../src/routes/main/sidebar';

let items = [
  {
    _id: 1,
    name: 'CN Tower',
    location: {
      city: 'Toronto',
      country: 'Canada'
    }
  },
  {
    _id: 2,
    name: 'Punta Rata',
    location: {
      city: 'Brela',
      country: 'Croatia'
    }
  }
];

let component;

describe('Sidebar', () => {
  component = shallow(<Sidebar views={items} />);

  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('has two Locations items', () => {
    expect(component.find('Locations').length).toEqual(2);
  });

  describe('views', () => {
    beforeEach(() => {
      //sinon.spy(Sidebar.prototype, 'renderLocations');
      const buttonClick = sinon.spy();
      component = shallow(<Sidebar views={items} buttonClick={buttonClick} />);
    });

    it('are clickable', () => {
      let secondLocation = component.find('Locations').at(1).parent();
      expect(secondLocation.props().onClick).toBeDefined();
    });
  });
});

