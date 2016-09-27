/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import FormRow from './FormRow';
import React from 'react';
import {connect} from 'react-redux';
import * as API from '../API';
import * as actions from '../actions/actions';
import * as lodash from 'lodash';

const isValid = {
  vacancy: false,
  fullName: false,
  phone: false,
  mail: false,
  education: false,
  experience: false,
  date: false,
};
export default class Form extends React.Component {
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
    console.log(this.isValid(isValid));
    if (this.isValid(isValid)) {
      API.addData(Math.random(), this.props.userData);
    } else {
      alert('Не все поля формы корректно заполнены');
      event.preventDefault();
    }
  }
  onChangeVacancy(event) {
    this.dispatch(actions.changeVacancy(event.target.value));
    isValid.vacancy = this.userData.vacancy.length !== 0;
  }
  onChangeFullName(event) {
    this.dispatch(actions.changeFullName(event.target.value));
    isValid.fullName = this.userData.fullName.length !== 0;
  }
  onChangeMail(event) {
    this.dispatch(actions.changeMail(event.target.value));
    isValid.mail = this.userData.mail.length !== 0;
  }
  onChangePhone(event) {
    this.dispatch(actions.changePhone(event.target.value));
    isValid.phone = this.userData.phone.length !== 0;
  }
  onChangeExperince(event) {
    this.dispatch(actions.changeExperience(event.target.value));
    isValid.experience = this.userData.experience.length !== 0;
  }
  onChangeEducation(event) {
    this.dispatch(actions.changeEducation(event.target.value));
    isValid.education = this.userData.education.length !== 0;
  }
  onChangeDate(event) {
    this.dispatch(actions.changeDate(event.target.value));
    isValid.date = this.userData.date.length > 0;
  }
  validationVacancy(newData) {
    isValid.vacancy = newData.length > 0;
    return newData.length > 0;
  }
  validationFullName(newData) {
    const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
    isValid.fullName = fullName.test(newData);
    return fullName.test(newData);
  }
  validationMail(newData) {
    const mail = /[0-9a-zа-яё_]@[0-9a-zа-яё_^\.]+\.[a-zа-яё]{2,3}$/;
    isValid.mail = mail.test(newData);
    return mail.test(newData);
  }
  validationPhone(newData) {
    const phone = /^\d{1}-\d{3}-\d{3}-\d{4}$/;
    isValid.phone = phone.test(newData);
    return phone.test(newData);
  }isInputEmpty
  validationExperince(newData) {
    isValid.experience = newData.length > 0;
    return newData.length > 0;
  }
  validationEducation(newData) {
    isValid.education = newData.length > 0;
    return newData.length > 0;
  }
  validationData(newData) {
    const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d/;
    isValid.date = date.test(newData);
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
          error="Обязательное поле"
          emptyFieldError="Вы не заполнили поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeFullName}
          validation={this.validationFullName}
          name="ФИО:"
          error="Возможно вы допустили ошибку при вводе ФИО"
          emptyFieldError="Вы не заполнили поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeMail}
          validation={this.validationMail}
          name="Mail:"
          error="Поле должно быть вида userAdress@email.bb"
          emptyFieldError="Вы не заполнили поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangePhone}
          validation={this.validationPhone}
          name="Контактный телефон:"
          error="Телефон должен быть вида 8-987-654-3210"
          emptyFieldError="Вы не заполнили поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeExperince}
          validation={this.validationExperince}
          name="Опыт работы:"
          error="Обязательное поле"
          emptyFieldError="Вы не заполнили поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeEducation}
          validation={this.validationEducation}
          name="Образование:"
          error="Обязательное поле"
          emptyFieldError="Вы не заполнили поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChangeDate}
          validation={this.validationData}
          name="Дата заполнения:"
          error="Дата должна быть вида дд.мм.гггг"
          emptyFieldError="Вы не заполнили поле"/>
        <button className="form-send" onClick={this.onSubmit.bind(this)}>Отправить</button>
      </form>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Form);
