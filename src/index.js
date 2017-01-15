import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import throttle from 'lodash/throttle';
import { AUTH_USER, AUTH_NAME } from './actions/types';
import { saveState } from './localStorage';

// Components to route
import App from './core';
import Home from './routes/home';
import Privacy from './routes/footer/privacy';
import Countries from './routes/countries';
import Categories from './routes/categories';
import Country from './routes/country';
import Main from './routes/main';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
  // Let our application know the user is authenticated if a token exists
  store.dispatch({ type: AUTH_USER });
  store.dispatch({
    type: AUTH_NAME,
    payload: JSON.parse(localStorage.state).auth.username
  });
}

// Add a listener for our store to be saved to localStorage
store.subscribe(throttle(() => {
  //saveState(store.getState());
  saveState({
    auth: store.getState().auth
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route name='privacy' path='/privacy_policy' component={Privacy} />
        <Route name='countries' path='/countries' component={Countries} />
        <Route name='categories' path='/categories' component={Categories} />
        <Route name='country' path='/country/:country' component={Country} />
        <Route name='term' path='/location/:term' component={Main} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));