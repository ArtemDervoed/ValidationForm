/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import FormRow from './FormRow';
import React from 'react';
import {connect} from 'react-redux';
import * as API from '../API';
import * as actions from '../actions/actions';
// REVIEW: правильнее было бы импортировать отдельную функцию, а не всю библиотеку
// нас главной странице https://lodash.com/ написано, как это сделать, только используй
// import, а не require
import * as lodash from 'lodash';

const dataState = {
  vacancy: false,
  fullName: false,
  phone: false,
  mail: false,
  education: false,
  experience: false,
  date: false,
};
export default class Form extends React.Component {
  // REVIEW: а если ты будешь добавлять поля? Тебе придётся и этот код менять?
  // подумай, как сделать его более универсальным
  isValid(state) {
    let counter = 0;
    lodash.forIn(state, (key, value) => {
      if (key) {
        counter++;
      }
    });
    return (counter === 7);
  }
  onSubmit(event) {
    if (this.isValid(dataState)) {
      API.addData(Math.random(), this.props);
    } else {
      alert('Не все поля формы корректно заполнены');
      event.preventDefault();
    }
  }
  // REVIEW: у тебя же был вроде общий метод для валидации всего?
  // Только в FormRow он был неуместен - а здесь было бы хорошо его использовать,
  // не нужно было разбивать его на мелкие методы.
  // и тексты ошибок тоже можно в нём возвращать
  onChangeVacancy(event) {
    this.dispatch(actions.changeVacancy(event.target.value));
    dataState.vacancy = this.vacancy.length !== 0;
  }
  onChangeFullName(event) {
    this.dispatch(actions.changeFullName(event.target.value));
    dataState.fullName = this.fullName.length !== 0;
  }
  onChangeMail(event) {
    this.dispatch(actions.changeMail(event.target.value));
    dataState.mail = this.mail.length !== 0;
  }
  onChangePhone(event) {
    this.dispatch(actions.changePhone(event.target.value));
    dataState.phone = this.phone.length !== 0;
  }
  onChangeExperince(event) {
    this.dispatch(actions.changeExperience(event.target.value));
    dataState.experience = this.experience.length !== 0;
  }
  onChangeEducation(event) {
    this.dispatch(actions.changeEducation(event.target.value));
    dataState.education = this.education.length !== 0;
  }
  onChangeDate(event) {
    this.dispatch(actions.changeDate(event.target.value));
    dataState.date = this.date.length > 0;
  }
  validationVacancy(newData) {
    dataState.vacancy = newData.length > 0;
    return newData.length > 0;
  }
  validationFullName(newData) {
    const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
    dataState.fullName = fullName.test(newData);
    return fullName.test(newData);
  }
  validationMail(newData) {
    const mail = /[0-9a-zа-яё_]@[0-9a-zа-яё_^\.]+\.[a-zа-яё]{2,3}$/;
    dataState.mail = mail.test(newData);
    return mail.test(newData);
  }
  validationPhone(newData) {
    const phone = /^\d{1}-\d{3}-\d{3}-\d{4}$/;
    dataState.phone = phone.test(newData);
    return phone.test(newData);
  }isInputEmpty
  validationExperince(newData) {
    dataState.experience = newData.length > 0;
    return newData.length > 0;
  }
  validationEducation(newData) {
    dataState.education = newData.length > 0;
    return newData.length > 0;
  }
  validationData(newData) {
    const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d$/;
    dataState.date = date.test(newData);
    return date.test(newData);
  }
  isInputEmpty(event) {
    return event.target.value.length === 0;
  }

  render() {
    return (
      <form className="content--col form">
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeVacancy}
          validation={this.validationVacancy}
          name="Вакансия:"
          error="Укажите желаемую вакансию"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeFullName}
          validation={this.validationFullName}
          name="ФИО:"
          error="Возможно вы допустили ошибку при вводе ФИО"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeMail}
          validation={this.validationMail}
          name="Mail:"
          error="Поле должно быть вида userAdress@email.bb"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangePhone}
          validation={this.validationPhone}
          name="Контактный телефон:"
          error="Телефон должен быть вида 8-987-654-3210"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeExperince}
          validation={this.validationExperince}
          name="Опыт работы:"
          error="Укжите свой опыт"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeEducation}
          validation={this.validationEducation}
          name="Образование:"
          error="Укажите свое образование"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeDate}
          validation={this.validationData}
          name="Дата заполнения:"
          error="Дата должна быть вида дд.мм.гггг"
          emptyFieldError="Обязательное поле"/>
        <button className="form-send" onClick={this.onSubmit.bind(this)}>Отправить</button>
      </form>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Form);
