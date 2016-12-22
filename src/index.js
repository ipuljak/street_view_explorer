import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Components to route
import App from './core';
import Home from './routes/home';
import Signin from './routes/signin';
import Signup from './routes/signup';
import Countries from './routes/countries';
import Categories from './routes/categories';
import Country from './routes/country';
import View from './routes/view';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route name='login' path='/signin' component={Signin} />
                <Route name='signup' path='/signup' component={Signup} />
                <Route name='countries' path='/countries' component={Countries} />
                <Route name='categories' path='/categories' component={Categories} />
                <Route name='country' path='/country/:country' component={Country} />
                <Route name='term' path='/location/:term' component={View} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#root'));