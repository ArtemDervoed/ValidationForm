/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import * as actionstype from '../actions/actionstype';
import DataRow from './formDataRow';
import React from 'react';
import {connect} from 'react-redux';

export default class Form extends React.Component {
  render() {
    return (
      <form className="content--col">
        <DataRow name="Вакансия:" error="Обязательное поле"/>
        <DataRow name="ФИО:" error="Введите полные ФИО"/>
        <DataRow name="Mail:" error="Обязательное поле"/>
        <DataRow name="Контактный телефон:" error="Телефон должен быть вида 89876543210"/>
        <DataRow name="Опыт работы:" error="Обязательное поле"/>
        <DataRow name="Образование:" error="Обязательное поле"/>
        <DataRow name="Дата заполнения:" error="Дата должна быть вида дд.мм.гггг"/>
        <button>Отправить</button>
      </form>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Form);
