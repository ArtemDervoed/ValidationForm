/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import * as actionstype from '../actions/actionstype';
import DocumentDataRow from './documentDataRow';

class Document extends React.Component {
  render() {
    return (
      <section className="content--col" >
        <DocumentDataRow name="Вакансия: " data="" />
        <DocumentDataRow name="ФИО: " data="" />
        <DocumentDataRow name="Mail: " data="" />
        <DocumentDataRow name="Контактный телефон: " data="" />
        <DocumentDataRow name="Опыт работы: " data="" />
        <DocumentDataRow name="Дата заполнения: " data="" />
      </section>
   );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Document);
