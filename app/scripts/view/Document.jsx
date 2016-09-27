/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import DocumentRow from './DocumentRow';

class Document extends React.Component {
  render() {
    return (
      <section className="content--col" >
        <DocumentRow name="Вакансия:" data={this.props.userData.vacancy} />
        <DocumentRow name="ФИО:" data={this.props.userData.fullName}/>
        <DocumentRow name="Mail:" data={this.props.userData.mail} />
        <DocumentRow name="Контактный телефон:" data={this.props.userData.phone}/>
        <DocumentRow name="Опыт работы:" data={this.props.userData.experience}/>
        <DocumentRow name="Образование:" data={this.props.userData.education}/>
        <DocumentRow name="Дата заполнения:" data={this.props.userData.date}/>
      </section>
   );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Document);
