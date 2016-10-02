import React from 'react';
import {connect} from 'react-redux';

export default class DataRow extends React.Component {
  // REVIEW: по сути, у нас должен быть один блок, в котором отображается валидация
  // а сам текст должен разруливаться в форме
  onInputBlur(event) {
    // REVIEW: опять ты обращаешься к элементам по положению в DOM-дереве
    // используй ref вместо этого
    // https://facebook.github.io/react/docs/more-about-refs.html
    const errorEmptyClassName = event.target.parentNode.parentNode.childNodes[1].classList;
    const errorValidation = event.target.parentNode.parentNode.childNodes[2].classList;
    if (this.props.onBlur(event)) {
      errorEmptyClassName.remove("__hidden");
      errorValidation.add("__hidden");
    }
    if (!this.props.onBlur(event)) {
      errorEmptyClassName.add("__hidden");
    }
  }

  onInputChange(event) {
    this.props.onChange(event);
    const errorValidation = event.target.parentNode.parentNode.childNodes[2].classList;
    const errorEmptyClassName = event.target.parentNode.parentNode.childNodes[1].classList;
    if (!this.props.validation(event.target.value)) {
      errorValidation.remove("__hidden");
      errorEmptyClassName.add("__hidden");
    }
    if (this.props.validation(event.target.value)) {
      errorValidation.add("__hidden");
    }
  }
  render() {
    return (
      <div className="form--row">
        <label className="form--row-header">{this.props.name}
          <input className="form--row-input" onBlur={this.onInputBlur.bind(this)} onChange={this.onInputChange.bind(this)} />
        </label>
        <div className="form--row-error-empty __hidden">{this.props.emptyFieldError} </div>
        <div className="form--row-error __hidden">{this.props.error} </div>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
