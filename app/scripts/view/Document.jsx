/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import DocumentRow from './DocumentRow';

class Document extends React.Component {
  render() {
    return (
      <section className="content--col" >
        <DocumentRow name="Вакансия:" data={this.props.vacancy} />
        <DocumentRow name="ФИО:" data={this.props.fullName}/>
        <DocumentRow name="Mail:" data={this.props.mail} />
        <DocumentRow name="Контактный телефон:" data={this.props.phone}/>
        <DocumentRow name="Опыт работы:" data={this.props.experience}/>
        <DocumentRow name="Образование:" data={this.props.education}/>
        <DocumentRow name="Дата заполнения:" data={this.props.date}/>
      </section>
   );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Document);
