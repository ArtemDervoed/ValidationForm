import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

// REVIEW: Изучи формы в html, ты неправильно используешь label

// REVIEW: мне пока не нравится сам процесс валидации в общем и в частности мне
// не нравится тексты валидации некоторых полей. Можешь пока представить себя
// пользователем и подумать, что именно можно изменить и как улучшить валидацию.

// REVIEW: inputEventHandler - не нравится название. Тем более, оно не отражает
// действительность. Возможно я уже писала рекомендацию по названию. Предлагаю
// тебе подумать, как можно было бы назвать
export default class DataRow extends React.Component {
  inputEventHandler(event) {
    const errorMessage = document.querySelectorAll('.content--form--row-error');
    switch (this.props.name) {
      case 'Вакансия:': {
        this.props.dispatch(actions.changeVacancy(event.target.value));
        errorMessage[0].style.display = (event.target.value.length > 0) ? "none" : "block";
      } break;
      case 'ФИО:': {
        this.props.dispatch(actions.changeFullName(event.target.value));
        const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
        errorMessage[1].style.display = (fullName.test(event.target.value)) ? "none" : "block";
      } break;
      case 'Контактный телефон:': {
        this.props.dispatch(actions.changePhone(event.target.value));
        const phone = /[0-9]{5,10}/g;
        errorMessage[3].style.display = (phone.test(event.target.value)) ? "none" : "block";
      } break;
      case 'Mail:': {
        this.props.dispatch(actions.changeMail(event.target.value));
        const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
        errorMessage[2].style.display = (mail.test(event.target.value)) ? "none" : "block";
      } break;
      case 'Опыт работы:': {
        this.props.dispatch(actions.changeExperience(event.target.value));
        errorMessage[4].style.display = (event.target.value.length > 0) ? "none" : "block";
      } break;
      case 'Образование:': {
        this.props.dispatch(actions.changeEducation(event.target.value));
        errorMessage[5].style.display = (event.target.value.length > 0) ? "none" : "block";
      } break;
      case 'Дата заполнения:': {
        this.props.dispatch(actions.changeDate(event.target.value));
        const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d/g;
        errorMessage[6].style.display = (date.test(event.target.value)) ? "none" : "block";
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
