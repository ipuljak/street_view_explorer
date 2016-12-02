import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Components
import App from './core';
import Welcome from './routes/home/welcome';
import Type from './routes/Type';
import View from './routes/View';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Welcome} />
                <Route name='types' path='/:typename' component={Type} />
                <Route name='view' path='/location/:viewname' component={View} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#root'));