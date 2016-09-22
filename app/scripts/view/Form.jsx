/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import FormRow from './FormRow';
import {checkedEmpty} from './FormRow';
import {checkedValid} from './FormRow';
import React from 'react';
import {connect} from 'react-redux';
import * as API from './../API';

export default class Form extends React.Component {
  onSubmit(event) {
    API.addData(Math.random(), this.props.main);
    // kek is here
  }
  render() {
    return (
      <form method="post" className="content--col">
        <FormRow name="Вакансия:" error="Обязательное поле" errorEmpty="Вы не заполнили поле"/>
        <FormRow name="ФИО:" error="Возможно вы не полностью внесли свои ФИО или допустили ошибку" errorEmpty="Вы не заполнили поле"/>
        <FormRow name="Mail:" error="Поле должно быть вида userAdress@email.bb" errorEmpty="Вы не заполнили поле"/>
        <FormRow name="Контактный телефон:" error="Телефон должен быть вида 8-987-654-3210" errorEmpty="Вы не заполнили поле"/>
        <FormRow name="Опыт работы:" error="Обязательное поле" errorEmpty="Вы не заполнили поле"/>
        <FormRow name="Образование:" error="Обязательное поле" errorEmpty="Вы не заполнили поле"/>
        <FormRow name="Дата заполнения:" error="Дата должна быть вида дд.мм.гггг" errorEmpty="Вы не заполнили поле"/>
        <input type="button" onClick={this.onSubmit.bind(this)} value="Отправить"/>
      </form>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Form);
