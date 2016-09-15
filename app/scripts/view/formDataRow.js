import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export default class DataRow extends React.Component {
  inputEventHandler(event) {
    const errorMessage = document.querySelectorAll('.content--form--row-error');
    switch (this.props.name) {
      case 'Вакансия:': {
        this.props.dispatch(actions.changeVacancy(event.target.value));
        errorMessage[0].style.display = "block";
      } break;
      case 'ФИО:': {
        this.props.dispatch(actions.changeFullName(event.target.value));
        errorMessage[1].style.display = "block";
      } break;
      case 'Контактный телефон:': {
        this.props.dispatch(actions.changePhone(event.target.value));
        errorMessage[3].style.display = "block";
      } break;
      case 'Mail:': {
        this.props.dispatch(actions.changeMail(event.target.value));
        const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
        errorMessage[2].style.display = (mail.test(event.target.value)) ? "none" : "block";
      } break;
      case 'Опыт работы:': {
        this.props.dispatch(actions.changeExperience(event.target.value));
        errorMessage[4].style.display = "block";
      } break;
      case 'Образование:': {
        this.props.dispatch(actions.changeEducation(event.target.value));
        errorMessage[5].style.display = "block";
      } break;
      case 'Дата заполнения:': {
        this.props.dispatch(actions.changeDate(event.target.value));
        errorMessage[6].style.display = "block";
      } break;
      default: return undefined;
    }
  }
  render() {
    return (
      <div className="content--form--row">
        <label className="content--form--row-label">{this.props.name}</label>
        <input className="content--form--row-input" onChange={this.inputEventHandler.bind(this)} />
        <label className="content--form--row-error">{this.props.error} </label>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
