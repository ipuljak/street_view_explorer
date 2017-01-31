import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Locations from '../../src/routes/main/sidebar/locations';

let item = {
  _id: 1,
  name: 'CN Tower',
  location: {
    city: 'Toronto',
    country: 'Canada'
  },
  view: {
    indoor: true
  }
};

let component;

describe('Locations', () => {
  component = shallow(<Locations props={item} />);

  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('contains the item name', () => {
    expect(component.childAt(0).text()).toEqual('CN Tower');
  });

  it('contains the item data', () => {
    expect(component.childAt(1).text()).toEqual('Toronto, Canada');
  });
});