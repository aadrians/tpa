import React from 'react';
import {Link} from 'react-router-dom';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Jadwal TPA hari ini</h1>
        <p>Pengajar vs Peserta</p>
        <Link to="pengajar" className="btn btn-primary btn-lg">Go to Pengajar</Link>
      </div>
    );
  }
}
