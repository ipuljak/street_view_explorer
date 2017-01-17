import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Info from '../../src/routes/main/view/info';

let data = {
  image: 'http://i.imgur.com/soxFIvz.jpg',
  source: 'Copyright Imgur',
  info: 'This is just placeholder text\n',
  link: 'http://wikipedia.org'
};

let component;

describe('Info', () => {
  component = shallow(<Info data={data} />);
  const infoText = component.find('p').first().childAt(0);

  it('renders the component', () => {
    expect(component).toBeDefined();
  });

  it('contains a single image', () => {
    expect(component.find('img').length).toEqual(1);
  });

  it('contains info to be shown', () => {
    expect(infoText.text()).toBeDefined();
  });

  it('removes newlines from the info', () => {
    expect(infoText.text()).toEqual('This is just placeholder text');
  });
});

