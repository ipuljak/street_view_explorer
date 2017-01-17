import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Locations from '../../src/routes/main/sidebar/locations';
import Sidebar from '../../src/routes/main/sidebar';

const items = [
  {
    name: 'CN Tower',
    location: {
      city: 'Toronto',
      country: 'Canada'
    }
  },
  {
    name: 'Punta Rata',
    location: {
      city: 'Brela',
      country: 'Croatia'
    }
  }
];

// describe('Locations', () => {
//   let wrapper;
//   wrapper = shallow(<Locations props={item} />);
//   it('wraps content in a div with list-group-item class', () => {
//     expect(wrapper.find('.list-group-item').length).toEqual(1);
//   });
// });

