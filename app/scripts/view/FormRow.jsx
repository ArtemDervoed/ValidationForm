import React from 'react';
import {connect} from 'react-redux';

export default class DataRow extends React.Component {
  onInputBlur(event) {
    const errorEmptyClassName = event.target.parentNode.parentNode.childNodes[1].classList;
    const errorValidation = event.target.parentNode.parentNode.childNodes[2].classList;
    if (this.props.onBlur(event)) {
      errorEmptyClassName.remove("_hidden");
      errorValidation.add("_hidden");
    }
    if (!this.props.onBlur(event)) {
      errorEmptyClassName.add("_hidden");
    }
  }

  onInputChange(event) {
    this.props.onChange(event);
    const errorValidation = event.target.parentNode.parentNode.childNodes[2].classList;
    const errorEmptyClassName = event.target.parentNode.parentNode.childNodes[1].classList;
    if (!this.props.validation(event.target.value)) {
      errorValidation.remove("_hidden");
      errorEmptyClassName.add("_hidden");
    }
    if (this.props.validation(event.target.value)) {
      errorValidation.add("_hidden");
    }
  }
  render() {
    return (
      <div className="form--row">
        <label className="form--row-header">{this.props.name}
          <input className="form--row-input" onBlur={this.onInputBlur.bind(this)} onChange={this.onInputChange.bind(this)} />
        </label>
        <div className="form--row-error-empty _hidden">{this.props.emptyFieldError} </div>
        <div className="form--row-error _hidden">{this.props.error} </div>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
