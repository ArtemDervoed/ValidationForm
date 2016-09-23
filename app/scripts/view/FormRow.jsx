import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export const checkedEmpty = {
  vacansy: false,
  fullName: false,
  phone: false,
  mail: false,
  education: false,
  experience: false,
  date: false,
};
export const checkedValid = {
  vacansy: false,
  fullName: false,
  phone: false,
  mail: false,
  education: false,
  experience: false,
  date: false,
};

export default class DataRow extends React.Component {
  onInputBlur(event) {
    const emptyErrorMessage = document.querySelectorAll('.form--row-error-empty');
    switch (this.props.name) {
      case 'Вакансия:': {
        emptyErrorMessage[0].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.vacansy = event.target.value.length > 0;
      } break;
      case 'ФИО:': {
        emptyErrorMessage[1].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.fullName = event.target.value.length > 0;
      } break;
      case 'Контактный телефон:': {
        emptyErrorMessage[3].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.phone = event.target.value.length > 0;
      } break;
      case 'Mail:': {
        emptyErrorMessage[2].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.mail = event.target.value.length > 0;
      } break;
      case 'Опыт работы:': {
        emptyErrorMessage[4].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.experience = event.target.value.length > 0;
      } break;
      case 'Образование:': {
        emptyErrorMessage[5].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.education = event.target.value.length > 0;
      } break;
      case 'Дата заполнения:': {
        emptyErrorMessage[6].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedEmpty.date = event.target.value.length > 0;
      } break;
      default: return undefined;
    }
  }
  onInputClick(event) {
    const errorMessage = document.querySelectorAll('.form--row-error');
    const emptyErrorMessage = document.querySelectorAll('.form--row-error-empty');
    switch (this.props.name) {
      case 'Вакансия:': {
        this.props.dispatch(actions.changeVacancy(event.target.value));
        errorMessage[0].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedValid.vacansy = event.target.value.length > 0;
        emptyErrorMessage[0].style.display = "none";
      } break;
      case 'ФИО:': {
        this.props.dispatch(actions.changeFullName(event.target.value));
        const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
        errorMessage[1].style.display = (fullName.test(event.target.value)) ? "none" : "block";
        checkedValid.fullName = fullName.test(event.target.value) > 0;
        emptyErrorMessage[1].style.display = "none";
      } break;
      case 'Контактный телефон:': {
        this.props.dispatch(actions.changePhone(event.target.value));
        const phone = /^\d{1}-\d{3}-\d{3}-\d{4}/;
        errorMessage[3].style.display = (phone.test(event.target.value) && event.target.value.length === 14) ? "none" : "block";
        checkedValid.phone = (phone.test(event.target.value) && event.target.value.length === 14);
        emptyErrorMessage[3].style.display = "none";
      } break;
      case 'Mail:': {
        this.props.dispatch(actions.changeMail(event.target.value));
        const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/;
        errorMessage[2].style.display = (mail.test(event.target.value) && mail.exec(event.target.value)[0].length === event.target.value.length) ? "none" : "block";
        checkedValid.mail = (mail.test(event.target.value) && mail.exec(event.target.value)[0].length === event.target.value.length);
        emptyErrorMessage[2].style.display = "none";
      } break;
      case 'Опыт работы:': {
        this.props.dispatch(actions.changeExperience(event.target.value));
        errorMessage[4].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedValid.experience = event.target.value.length > 0;
        emptyErrorMessage[4].style.display = "none";
      } break;
      case 'Образование:': {
        this.props.dispatch(actions.changeEducation(event.target.value));
        errorMessage[5].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedValid.education = event.target.value.length > 0;
        emptyErrorMessage[5].style.display = "none";
      } break;
      case 'Дата заполнения:': {
        this.props.dispatch(actions.changeDate(event.target.value));
        const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d/;
        errorMessage[6].style.display = (date.test(event.target.value) && event.target.value.length === 10) ? "none" : "block";
        checkedValid.date = date.test(event.target.value) > 0;
        emptyErrorMessage[6].style.display = "none";
      } break;
      default: return undefined;
    }
  }
  render() {
    return (
      <article className="form--row">
        <div className="form--row-header">{this.props.name}</div>
        <input className="form--row-input" onBlur={this.onInputBlur.bind(this)} onChange={this.onInputClick.bind(this)} />
        <div className="form--row-error-empty">{this.props.errorEmpty} </div>
        <div className="form--row-error">{this.props.error} </div>
      </article>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
