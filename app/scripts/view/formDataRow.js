import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export default class DataRow extends React.Component {
  inputEventHandler(event) {
    switch (this.props.name) {
      case 'Вакансия:': {
        this.props.dispatch(actions.changeVacancy(event.target.value));
      } break;
      case 'ФИО:': {
        this.props.dispatch(actions.changeFullName(event.target.value));
      } break;
      case 'Контактный телефон:': {
        this.props.dispatch(actions.changePhone(event.target.value));
      } break;
      case 'Mail:': {
        this.props.dispatch(actions.changeMail(event.target.value));
      } break;
      case 'Опыт работы:': {
        this.props.dispatch(actions.changeExperience(event.target.value));
      } break;
      case 'Образование:': {
        this.props.dispatch(actions.changeEducation(event.target.value));
      } break;
      case 'Дата заполнения:': {
        this.props.dispatch(actions.changeDate(event.target.value));
      } break;
      default: return undefined;
    }
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
