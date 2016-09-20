import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export const checked = {
  vacansy: false,
  fullName: false,
  phone: false,
  mail: false,
  education: false,
  experience: false,
  date: false,
};

export default class DataRow extends React.Component {
  inputBlurEventHandler(event) {
    const emptyErrorMessage = document.querySelectorAll('.form--row-error-empty');
    const errorMessage = document.querySelectorAll('.form--row-error');
    switch (this.props.name) {
      case 'Вакансия:': {
        emptyErrorMessage[0].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.vacansy = event.target.value.length > 0;
        errorMessage[0].style.display = "none";
      } break;
      case 'ФИО:': {
        emptyErrorMessage[1].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.fullName = event.target.value.length > 0;
        errorMessage[1].style.display = "none";
      } break;
      case 'Контактный телефон:': {
        emptyErrorMessage[3].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.phone = event.target.value.length > 0;
        errorMessage[3].style.display = "none";
      } break;
      case 'Mail:': {
        emptyErrorMessage[2].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.mail = event.target.value.length > 0;
        errorMessage[2].style.display = "none";
      } break;
      case 'Опыт работы:': {
        emptyErrorMessage[4].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.experience = event.target.value.length > 0;
        errorMessage[4].style.display = "none";
      } break;
      case 'Образование:': {
        emptyErrorMessage[5].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.education = event.target.value.length > 0;
        errorMessage[5].style.display = "none";
      } break;
      case 'Дата заполнения:': {
        emptyErrorMessage[6].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.date = event.target.value.length > 0;
        errorMessage[6].style.display = "none";
      } break;
      default: return undefined;
    }
  }
  inputChangeHandler(event) {
    const errorMessage = document.querySelectorAll('.form--row-error');
    const emptyErrorMessage = document.querySelectorAll('.form--row-error-empty');
    switch (this.props.name) {
      case 'Вакансия:': {
        this.props.dispatch(actions.changeVacancy(event.target.value));
        errorMessage[0].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.vacansy = event.target.value.length > 0;
        emptyErrorMessage[0].style.display = "none";
      } break;
      case 'ФИО:': {
        this.props.dispatch(actions.changeFullName(event.target.value));
        const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
        errorMessage[1].style.display = (fullName.test(event.target.value)) ? "none" : "block";
        checked.fullName = fullName.test(event.target.value) > 0;
        emptyErrorMessage[1].style.display = "none";
      } break;
      case 'Контактный телефон:': {
        this.props.dispatch(actions.changePhone(event.target.value));
        const phone = /\d{1}-\d{3}-\d{3}-\d{4}/;
        errorMessage[3].style.display = (phone.test(event.target.value)) ? "none" : "block";
        checked.phone = phone.test(event.target.value) > 0;
        emptyErrorMessage[3].style.display = "none";
      } break;
      case 'Mail:': {
        this.props.dispatch(actions.changeMail(event.target.value));
        const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/;
        errorMessage[2].style.display = (mail.test(event.target.value)) ? "none" : "block";
        checked.mail = mail.test(event.target.value) > 0;
        emptyErrorMessage[2].style.display = "none";
      } break;
      case 'Опыт работы:': {
        this.props.dispatch(actions.changeExperience(event.target.value));
        errorMessage[4].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.experience = event.target.value.length > 0;
        emptyErrorMessage[4].style.display = "none";
      } break;
      case 'Образование:': {
        this.props.dispatch(actions.changeEducation(event.target.value));
        errorMessage[5].style.display = (event.target.value.length > 0) ? "none" : "block";
        checked.education = event.target.value.length > 0;
        emptyErrorMessage[5].style.display = "none";
      } break;
      case 'Дата заполнения:': {
        this.props.dispatch(actions.changeDate(event.target.value));
        const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d/g;
        errorMessage[6].style.display = (date.test(event.target.value)) ? "none" : "block";
        checked.date = date.test(event.target.value) > 0;
        emptyErrorMessage[6].style.display = "none";
      } break;
      default: return undefined;
    }
  }
  render() {
    return (
      <section className="form--row">
        <header className="form--row-label">{this.props.name}</header>
        <input className="form--row-input" onBlur={this.inputBlurEventHandler.bind(this)} onChange={this.inputChangeHandler.bind(this)} />
        <div className="form--row-error-empty">{this.props.errorEmpty} </div>
        <div className="form--row-error">{this.props.error} </div>
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
