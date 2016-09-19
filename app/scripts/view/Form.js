/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import FormRow from './FormRow';
import React from 'react';
import {connect} from 'react-redux';
import * as API from './../API';

export default class Form extends React.Component {
  onSubmit(event) {
    API.addData(Math.random(), this.props.main);
  }
  render() {
    return (
      <form method="post" className="content--col">
        <FormRow name="Вакансия:" error="Обязательное поле"/>
        <FormRow name="ФИО:" error="Введите полные ФИО"/>
        <FormRow name="Mail:" error="Обязательное поле"/>
        <FormRow name="Контактный телефон:" error="Телефон должен быть вида 89876543210"/>
        <FormRow name="Опыт работы:" error="Обязательное поле"/>
        <FormRow name="Образование:" error="Обязательное поле"/>
        <FormRow name="Дата заполнения:" error="Дата должна быть вида дд.мм.гггг"/>
        <input type="button" onClick={this.onSubmit.bind(this)} value="Отправить"/>
      </form>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Form);
