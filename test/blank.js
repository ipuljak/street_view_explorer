// //jest.unmock('../src/routes/categories');

// import TestUtils from 'react-addons-test-utils';
// import ReactDOM from 'react-dom';
// import React from 'react';
// import Categories from '../src/routes/categories';

// describe('Categories', () => {

//   // it('renders the Login button if not logged in', function() {
//   //   let page = TestUtils.renderIntoDocument(<BasicPage />)
//   //   let button = TestUtils.findRenderedDOMComponentWithTag(page, 'button')
//   //   expect(ReactDOM.findDOMNode(button).textContent).toBe('Login')
//   // })

//   // it('renders the Account button if logged in', function() {
//   //   let page = TestUtils.renderIntoDocument(<BasicPage authenticated={true} />)
//   //   let button = TestUtils.findRenderedDOMComponentWithTag(page, 'button')
//   //   expect(ReactDOM.findDOMNode(button).textContent).toBe('Your Account')
//   // })

//   it('shows the title "Global Categories"', () => {
//     let page = TestUtils.renderIntoDocument(<Categories />);
//     let title = TestUtils.findRenderedDOMComponentWithTag(page, 'h2');
//     expect(ReactDOM.findDOMNode(title).textContent).toBe('Global Categories');
//   });
// });