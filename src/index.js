import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <BrowserRouter history={browserHistory}>
    {routes}
  </BrowserRouter>,
  document.getElementById('app')
);
