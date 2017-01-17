import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import City from '../../src/routes/country/components/city_item';

let name = 'Toronto';

let component;

describe('City', () => {
  component = shallow(<City name={name} />);

  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('renders a Link to /location/Toronto', () => {
    const cityLink = component.find('Link').first();
    expect(cityLink.props().to).toEqual('/location/Toronto');
  });
});

