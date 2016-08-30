import React from 'react';
import {connect} from 'react-redux';
import {
  changeFullName,
  changeVacancy,
  changePhone,
  changeMail,
  changeSex,
  changeAge,
  changeNationality,
  changeMarried,
  changeDate,
  changeEducation,
  changeExperience,
  changeValid,
  changeCash
} from './../actions/actions';

@connect((store) => {
  return {
    user: store.user,
  };
})
export default class Form extends React.Component {
  componentWillMount() {

  }
  updateVacancy(event) {
    this.props.dispatch(changeVacancy(event.target.value));
  }
  updateCash(event) {
    this.props.dispatch(changeCash(event.target.value));
  }
  updateName(event) {
    this.props.dispatch(changeFullName(event.target.value));
  }
  updatePhone(event) {
    this.props.dispatch(changePhone(event.target.value));
  }
  updateMail(event) {
    this.props.dispatch(changeMail(event.target.value));
  }
  updateNationality(event) {
    this.props.dispatch(changeNationality(event.target.value));
  }
  updateAge(event) {
    this.props.dispatch(changeAge(event.target.value));
  }
  updateMarried(event) {
    this.props.dispatch(changeMarried(event.target.value));
  }
  updateEducation(event) {
    this.props.dispatch(changeEducation(event.target.value));
  }
  updateDate(event) {
    this.props.dispatch(changeDate(event.target.value));
  }
  render() {
    return (
      <section className="info">
        <span>Вакансия</span>
        <input type="text" className="info--vacancy" onChange={this.updateVacancy.bind(this)}/>
        <span>Желаемая зарплата</span>
        <input type="text" className="info--cash" onChange={this.updateCash.bind(this)}/>
        <span>ФИО</span>
        <input type="text" className="info--fullName" onChange={this.updateName.bind(this)}/>
        <span>Контактный телефон</span>
        <input type="text" className="info--phone" onChange={this.updatePhone.bind(this)}/>
        <span>Mail</span>
        <input type="text" className="info--mail" onChange={this.updateMail.bind(this)}/>
        <span>Гражданство</span>
        <input type="text" className="info--nationality" onChange={this.updateNationality.bind(this)}/>
        <span>Пол</span>
        <select name="sex" className="info--sex" >
          <option value="male">М</option>
          <option value="female">Ж</option>
        </select>
        <span>Возраст</span>
        <input type="text" className="info--age" onChange={this.updateAge.bind(this)}/>
        <span>Семейное положение</span>
        <input type="text" className="info--married" onChange={this.updateMarried.bind(this)}/>
        <span>Образование</span>
        <input type="text" className="info--education" onChange={this.updateEducation.bind(this)}/>
        <span>Опыт работы</span>
        <select name="experience" className="info--experience" >
          <option value="none">Отсутствует</option>
          <option value="oneYear">1 год</option>
          <option value="twoYear">2 года</option>
          <option value="fiveYear">5 лет</option>
          <option value="moreFiveYear">Более 5 лет</option>
        </select>
        <span>Дата</span>
        <input type="date" className="info--date" onChange={this.updateDate.bind(this)}/>
        <span>Разрешаю обработку личных данных</span>
        <input type="checkbox" className="valid" />
        <button className="submit" >Отправить </button>
      </section>
    );
  }
}
