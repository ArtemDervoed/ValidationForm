import React from 'react';
import {connect} from 'react-redux';

export default class FormRow extends React.Component {
  componentDidMount() {
    this._error = this.refs.error.classList;
  }
  onInputBlur(event) {
    if (this.props.onBlur(event)) {
      this._error.remove("__hidden");
      this.refs.error.innerHTML = this.props.emptyFieldError;
    }
    if (!this.props.onBlur(event)) {
      this.refs.error.innerHTML = this.props.error;
    }
  }

  onInputChange(event) {
    this.props.onChange(event, this.props.name);
    if (!this.props.validation(event.target.value, this.props.name)) {
      this.refs.error.innerHTML = this.props.error;
    }
    if (this.props.validation(event.target.value, this.props.name)) {
      this._error.add("__hidden");
      this.refs.error.innerHTML = this.props.emptyFieldError;
    }
  }
  render() {
    return (
      <div className="form--row">
        <label className="form--row-header">{this.props.name}
          <input className="form--row-input" onBlur={this.onInputBlur.bind(this)} onChange={this.onInputChange.bind(this)} />
        </label>
        <div className="form--row-error __hidden" ref="error"/>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(FormRow);
