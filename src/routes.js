import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PengajarPage from './components/pengajar/PengajarPage';
import MuridPage from './components/murid/MuridPage';
import AboutPage from './components/about/AboutPage';

export default (
  <div>
    <Route path="/" component={App} />
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/pengajar" component={PengajarPage} />
      <Route exact path="/murid" component={MuridPage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  </div>
);
