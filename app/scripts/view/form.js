import React from 'react';
import {connect} from 'react-redux';
import Storage from '../storage';
import {
  changeFullName,
  changeVacancy,
  changePhone,
  changeMail,
  changeGender,
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

  updateVacancy(event) {
    this.props.dispatch(changeVacancy(event.target.value));
    const vacancy = /^[а-яА-ЯёЁa-zA-Z]+$/;
    if (vacancy.test(event.target.value)) {
      event.target.className = "info--vacancy completed";
    } else {
      event.target.className = "info--vacancy warning";
    }
  }
  updateCash(event) {
    this.props.dispatch(changeCash(event.target.value));
    const cash = /^\d+$/;
    if (cash.test(event.target.value)) {
      event.target.className = "info--cash completed";
    } else {
      event.target.className = "info--cash warning";
    }
  }
  updateName(event) {
    this.props.dispatch(changeFullName(event.target.value));
    const name = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
    if (name.test(event.target.value)) {
      event.target.className = "info--name completed";
    } else {
      event.target.className = "info--name warning";
    }
  }
  updatePhone(event) {
    this.props.dispatch(changePhone(event.target.value));
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
    if (phone.test(event.target.value)) {
      event.target.className = "info--phone completed";
    } else {
      event.target.className = "info--phone warning";
    }
  }
  updateMail(event) {
    this.props.dispatch(changeMail(event.target.value));
    const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
    if (mail.test(event.target.value)) {
      event.target.className = "info--mail completed";
    } else {
      event.target.className = "info--mail warning";
    }
  }
  updateNationality(event) {
    this.props.dispatch(changeNationality(event.target.value));
    const nationality = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]|[А-ЯЁ][а-яё]+$/;
    if (nationality.test(event.target.value)) {
      event.target.className = "info--nationality completed";
    } else {
      event.target.className = "info--nationality warning";
    }
  }
  updateAge(event) {
    this.props.dispatch(changeAge(event.target.value));
    const age = /^\d+$/;
    if (age.test(event.target.value)) {
      event.target.className = "info--age completed";
    } else {
      event.target.className = "info--age warning";
    }
  }
  updateMarried(event) {
    this.props.dispatch(changeMarried(event.target.value));
    const married = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]|[А-ЯЁ][а-яё]+$/;
    if (married.test(event.target.value)) {
      event.target.className = "info--married completed";
    } else {
      event.target.className = "info--married warning";
    }
  }
  updateEducation(event) {
    this.props.dispatch(changeEducation(event.target.value));
    const eucation = /^[А-ЯЁ][а-яё]+ [а-яё]|[А-ЯЁ][а-яё]+$/;
    if (eucation.test(event.target.value)) {
      event.target.className = "info--eucation completed";
    } else {
      event.target.className = "info--eucation warning";
    }
  }
  updateDate(event) {
    this.props.dispatch(changeDate(event.target.value));
  }
  updateExperience(event) {
  const experienceList = document.getElementById('info--experience');
    if ( experienceList.selectedIndex != -1) {
      this.props.dispatch(changeExperience(experienceList.options[experienceList.selectedIndex].text));
    }
  }
  updateGender(event) {
  const genderList = document.getElementById('info--gender');
  if ( genderList.selectedIndex != -1) {
      this.props.dispatch(changeGender(genderList.options[genderList.selectedIndex].text));
    }
  }
  updateValid(event) {
    if (document.getElementById('valid').checked) {
        this.props.dispatch(changeValid("+"));
    } else {
      this.props.dispatch(changeValid("-"));
    }
  }

  send(event) {
    let storage = new Storage();
    if (document.getElementById('valid').checked) {
      // console.log(this.props.user['age']);
        storage.addData(Math.random(),this.props.user);
    } else {
      alert("Данные не подтверждены")
    }
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
        <select name="gender" id="info--gender" onClick={this.updateGender.bind(this)} >
          <option value="0"> М </option>
          <option value="1"> Ж </option>
        </select>
        <span>Возраст</span>
        <input type="text" className="info--age" onChange={this.updateAge.bind(this)}/>
        <span>Семейное положение</span>
        <input type="text" className="info--married" onChange={this.updateMarried.bind(this)}/>
        <span>Образование</span>
        <input type="text" className="info--education" onChange={this.updateEducation.bind(this)}/>
        <span>Опыт работы</span>
        <select name="experience" id="info--experience" onClick={this.updateExperience.bind(this)}>
          <option value="0">Отсутствует</option>
          <option value="1">1 год</option>
          <option value="2">2 года</option>
          <option value="5">5 лет</option>
          <option value="5+">Более 5 лет</option>
        </select>
        <span>Дата</span>
        <input type="date" className="info--date" onChange={this.updateDate.bind(this)}/>
        <span>Данные действительны</span>
        <input type="checkbox" id="valid" onChange={this.updateValid.bind(this)}/>
        <button className="send" onClick={this.send.bind(this)} >Отправить </button>
      </section>
    );
  }
}
