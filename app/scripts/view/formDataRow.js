import React from 'react';
import {connect} from 'react-redux';

export default class DataRow extends React.Component {
  inputEventHandler(event) {
    // this.props.dispatch()
    console.log(this.props);
    console.log(event);
  }
  render() {
    return (
      <div className="content--form--row">
        <label className="content--form--row-label">{this.props.name}</label>
        <input className="content--form--row-input" onChange={this.inputEventHandler.bind(this)} />
        <label className="content--form--row-error __hidden">{this.props.error} </label>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
