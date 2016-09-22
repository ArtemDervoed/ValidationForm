import React from 'react';
import {connect} from 'react-redux';

export default class DocumentDataRow extends React.Component {
  render() {
    return (
      <article className="document--row">
        <div className="document--row-label">{this.props.name} </div>
        <span className="document--row-data"> {this.props.data}</span>
      </article>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DocumentDataRow);
