import React from 'react';
import {connect} from 'react-redux';

export default class DocumentDataRow extends React.Component {
  render() {
    return (
      <div className="content--document--row">
        <label className="content--document--row-label">{this.props.name}</label>
        <span className="content--document--row-data">{this.props.data}</span>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DocumentDataRow);
