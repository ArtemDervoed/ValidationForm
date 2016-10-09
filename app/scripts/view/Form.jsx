/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import FormRow from './FormRow';
import React from 'react';
import {connect} from 'react-redux';
import * as API from '../API';
import * as actions from '../actions/actions';
import {forIn} from 'lodash';

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
  // REVIEW: Вот, что я хотела увидеть.
  // Здесь тебе не нужны лишние переменные
  // И в случае, если в цикле был найден ключ со значением false -
  //  цикл останавливается и выдаёт невалидность
  // isValid() {
  //   let allValid = true;
  //   forIn(dataState, (value, key) => {
  //     if (!key) {
  //       allValid = false;
  //       return;
  //     }
  //   });
  //   return allValid;
  // }
  isValid(state) {
    let counter = 0;
    let length = 0;
    forIn(state, (key, value) => {
      length++;
      if (key) {
        counter++;
      }
    });
    return (counter === length);
  }
  onSubmit(event) {
    if (this.isValid(dataState)) {
      API.addData(Math.random(), this.props);
    } else {
      alert('Не все поля формы корректно заполнены');
      event.preventDefault();
    }
  }
  onChange(event, field) {
    switch (field) {
      case 'Вакансия:': {
        this.dispatch(actions.changeVacancy(event.target.value));
        dataState.vacancy = this.vacancy.length !== 0;
      } break;
      case 'ФИО:': {
        this.dispatch(actions.changeFullName(event.target.value));
        dataState.fullName = this.fullName.length !== 0;
      } break;
      case 'Mail:': {
        this.dispatch(actions.changeMail(event.target.value));
        dataState.mail = this.mail.length !== 0;
      } break;
      case 'Контактный телефон:': {
        this.dispatch(actions.changePhone(event.target.value));
        dataState.phone = this.phone.length !== 0;
      } break;
      case 'Образование:': {
        this.dispatch(actions.changeEducation(event.target.value));
        dataState.education = this.education.length !== 0;
      } break;
      case 'Опыт работы:': {
        this.dispatch(actions.changeExperience(event.target.value));
        dataState.experience = this.experience.length !== 0;
      } break;
      case 'Дата заполнения:': {
        this.dispatch(actions.changeDate(event.target.value));
        dataState.date = this.date.length > 0;
      } break;
      default: return '';
    }
  }
  validation(newData, field) {
    switch (field) {
      case 'Вакансия:': {
        dataState.vacancy = newData.length > 0;
        return newData.length > 0;
      }
      case 'ФИО:': {
        const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
        dataState.fullName = fullName.test(newData);
        return fullName.test(newData);
      }
      case 'Mail:': {
        const mail = /[0-9a-zа-яё_]@[0-9a-zа-яё_^\.]+\.[a-zа-яё]{2,3}$/;
        dataState.mail = mail.test(newData);
        return mail.test(newData);
      }
      case 'Контактный телефон:': {
        const phone = /^\d{1}-\d{3}-\d{3}-\d{4}$/;
        dataState.phone = phone.test(newData);
        return phone.test(newData);
      }
      case 'Образование:': {
        dataState.education = newData.length > 0;
        return newData.length > 0;
      }
      case 'Опыт работы:': {
        dataState.experience = newData.length > 0;
        return newData.length > 0;
      }
      case 'Дата заполнения:': {
        const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d$/;
        dataState.date = date.test(newData);
        return date.test(newData);
      }
      default: return false;
    }
  }
  isInputEmpty(event) {
    return event.target.value.length === 0;
  }

  render() {
    return (
      <form className="content--col form">
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
          name="Вакансия:"
          error="Укажите желаемую вакансию"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
          name="ФИО:"
          error="Возможно вы допустили ошибку при вводе ФИО"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
          name="Mail:"
          error="Поле должно быть вида userAdress@email.bb"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
          name="Контактный телефон:"
          error="Телефон должен быть вида 8-987-654-3210"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
          name="Опыт работы:"
          error="Укжите свой опыт"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
          name="Образование:"
          error="Укажите свое образование"
          emptyFieldError="Обязательное поле"/>
        <FormRow
          onBlur={this.isInputEmpty}
          onChange={this.onChange}
          validation={this.validation}
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
