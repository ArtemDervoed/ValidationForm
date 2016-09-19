/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import DocumentRow from './DocumentRow';

class Document extends React.Component {
  render() {
    return (
      <section className="content--col" >
        <DocumentRow name="Вакансия:" data={this.props.main.vacansy} />
        <DocumentRow name="ФИО:" data={this.props.main.fullName}/>
        <DocumentRow name="Mail:" data={this.props.main.mail} />
        <DocumentRow name="Контактный телефон:" data={this.props.main.phone}/>
        <DocumentRow name="Опыт работы:" data={this.props.main.experience}/>
        <DocumentRow name="Образование:" data={this.props.main.education}/>
        <DocumentRow name="Дата заполнения:" data={this.props.main.date}/>
      </section>
   );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Document);
