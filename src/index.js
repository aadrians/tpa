/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
