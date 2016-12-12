import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Components to route
import App from './core';
import Welcome from './routes/home/welcome';
import Signin from './routes/signin';
import Signup from './routes/signup';
import Country from './routes/countries';
import View from './routes/view';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Welcome} />
                <Route name='login' path='/signin' component={Signin} />
                <Route name='signup' path='/signup' component={Signup} />
                <Route name='country' path='/country/:country' component={Country} />
                <Route name='term' path='/location/:term' component={View} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#root'));