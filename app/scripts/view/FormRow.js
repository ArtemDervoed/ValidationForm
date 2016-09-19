import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {checkedState} from '../checkedState';

export default class DataRow extends React.Component {
  inputEventHandler(event) {
    const errorMessage = document.querySelectorAll('.form--row-error');
    switch (this.props.name) {
      case 'Вакансия:': {
        this.props.dispatch(actions.changeVacancy(event.target.value));
        errorMessage[0].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedState.vacansy = (event.target.value.length > 0) === true;
      } break;
      case 'ФИО:': {
        this.props.dispatch(actions.changeFullName(event.target.value));
        const fullName = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
        errorMessage[1].style.display = (fullName.test(event.target.value)) ? "none" : "block";
        checkedState.fullName = (fullName.test(event.target.value)) === true;
      } break;
      case 'Контактный телефон:': {
        this.props.dispatch(actions.changePhone(event.target.value));
        const phone = /[0-9]{5,10}/g;
        errorMessage[3].style.display = (phone.test(event.target.value)) ? "none" : "block";
        checkedState.phone = (phone.test(event.target.value)) === true;
      } break;
      case 'Mail:': {
        this.props.dispatch(actions.changeMail(event.target.value));
        const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
        errorMessage[2].style.display = (mail.test(event.target.value)) ? "none" : "block";
        checkedState.mail = (mail.test(event.target.value)) === true;
      } break;
      case 'Опыт работы:': {
        this.props.dispatch(actions.changeExperience(event.target.value));
        errorMessage[4].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedState.experience = (event.target.value.length > 0) === true;
      } break;
      case 'Образование:': {
        this.props.dispatch(actions.changeEducation(event.target.value));
        errorMessage[5].style.display = (event.target.value.length > 0) ? "none" : "block";
        checkedState.education = (event.target.value.length > 0) === true;
      } break;
      case 'Дата заполнения:': {
        console.log(this.props);
        this.props.dispatch(actions.changeDate(event.target.value));
        const date = /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d/g;
        errorMessage[6].style.display = (date.test(event.target.value)) ? "none" : "block";
        checkedState.date = (date.test(event.target.value)) === true;
      } break;
      default: return undefined;
    }
  }
  render() {
    return (
      <section className="form--row">
        <header className="form--row-label">{this.props.name}</header>
        <input className="form--row-input" onChange={this.inputEventHandler.bind(this)} />
        <div className="form--row-error">{this.props.error} </div>
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataRow);
