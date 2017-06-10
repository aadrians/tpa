import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as pengajarActions from '../../actions/pengajarActions';
import {bindActionCreators} from 'redux';

class PengajarPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pengajar: { nama: '' }
    };

    this.onNamaChange = this.onNamaChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNamaChange(event){
    const pengajar = this.state.pengajar;
    pengajar.nama = event.target.value;
    this.setState({ pengajar: pengajar });
  }

  onClickSave(){
    this.props.actions.createPengajar(this.state.pengajar);
  }

  pengajarRow(pengajar, index) {
    return <div key={index}>{pengajar.nama}</div>;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>PengajarPage</h1>
        {this.props.pengajars.map(this.pengajarRow)}
        <p>Nama pengajar + profil</p>
        <h2>Tambah pengajar</h2>
        <input
          type="text"
          onChange={this.onNamaChange}
          value={this.state.pengajar.nama} />
        <input
          type="submit"
          value="Simpan"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

PengajarPage.propTypes = {
  pengajars: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {  //properties of store to be exposed in component
    pengajars: state.pengajars
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(pengajarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PengajarPage);
