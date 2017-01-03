import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import {AUTH_USER} from './actions/types';
//import RequireAuth from './core/Auth/require_auth';

// Components to route
import App from './core';
import Home from './routes/home';
import Signup from './routes/authentication/signup';
import Signin from './routes/authentication/signin';
import Signout from './routes/authentication/signout';
import Privacy from './routes/footer/privacy';
import Countries from './routes/countries';
import Categories from './routes/categories';
import Country from './routes/country';
import View from './routes/view';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
    // we need to update application state
    // if we put any action inside this dispatch, it will be sent off to all of our reducers
    // we are updating our application before it has been rendered
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route name='login' path='/signin' component={Signin} />
                <Route name='signup' path='/signup' component={Signup} />
                <Route name='signout' path='/signout' component={Signout} />
                <Route name='privacy' path='/privacy_policy' component={Privacy} />
                <Route name='countries' path='/countries' component={Countries} />
                <Route name='categories' path='/categories' component={Categories} />
                <Route name='country' path='/country/:country' component={Country} />
                <Route name='term' path='/location/:term' component={View} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#root'));