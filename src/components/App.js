import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}
