/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import * as actionstype from '../actions/actionstype';
import DocumentDataRow from './documentDataRow';

class Document extends React.Component {
  render() {
    return (
      <section className="content--col" >
        <DocumentDataRow name="Вакансия: " data={this.props.main.vacancy} />
        <DocumentDataRow name="ФИО: " data={this.props.main.fullName}/>
        <DocumentDataRow name="Mail: " data={this.props.main.mail} />
        <DocumentDataRow name="Контактный телефон: " data={this.props.main.phone}/>
        <DocumentDataRow name="Опыт работы: " data={this.props.main.experience}/>
        <DocumentDataRow name="Образование: " data={this.props.main.education}/>
        <DocumentDataRow name="Дата заполнения: " data={this.props.main.date}/>
      </section>
   );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Document);
