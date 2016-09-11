import React from 'react';
import {connect} from 'react-redux';
import Storage from '../storage';
import {condition} from './conditionstate'
// REVIEW: используй import * as actions from './../actions/actions';
// вместо этой огромной простыни названий экшнов
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

// REVIEW: использовать декораторы - это тонкий момент. Это экспериментальная часть ES7,
// она может внезапно измениться или перестать работать. Ден Абрамов (создатель Redux) пока не
// рекомендует их использовать https://github.com/happypoulp/redux-tutorial/issues/87
@connect((store) => {
  return {
    user: store.user,
  };
})
// REVIEW: Вначале лучше прочитать комментарий в самом низу, относящийся к структуре
export default class Form extends React.Component {
  // REVIEW: Мне не нравится, как реализована валидация.
  // Названия методов не отражают то, что в них происходит на самом деле.
  // Методы, начинающиеся на update* совмещают в себе и валидацию, и запись в стор одновременно.
  // REVIEW: Для связи с компонентами в React есть ref https://facebook.github.io/react/docs/more-about-refs.html
  // Для доступа к элементам внутри используй data-аттрибуты и
  // метод querySelectorAll() https://developer.mozilla.org/ru/docs/Web/API/Document/querySelectorAll
  updateVacancy(event) {
    this.props.dispatch(changeVacancy(event.target.value));
    const vacancy = /^[а-яА-ЯёЁa-zA-Z]/;
    if (vacancy.test(event.target.value)) {
      // REVIEW: Так делать не следует. Это создаёт большую связанность между js и стилями.
      // Менять следует только модификатор, а не весь класс.
      event.target.className = "info--vacancy __completed";
      // REVIEW: Для работы с DOM-деревом из js существуют data-аттрибуты, используй их.
      // REVIEW: Не рекомендую использовать тут двойную вложенность, тут она не нужна
      document.getElementsByClassName('info--vacancy--help')[0].className = 'info--vacancy--help __hidden';
      condition.vacansy = true;
    } else {
      event.target.className = "info--vacancy __warning";
      document.getElementsByClassName('info--vacancy--help')[0].className = 'info--vacancy--help';
      condition.vacansy = false;
    }
  }
  updateCash(event) {
    this.props.dispatch(changeCash(event.target.value));
    const cash = /^\d+$/;
    if (cash.test(event.target.value)) {
      event.target.className = "info--cash __completed";
      document.getElementsByClassName('info--vacancy--help')[1].className = 'info--vacancy--help __hidden';
      condition.cash = true;
    } else {
      event.target.className = "info--cash __warning";
      document.getElementsByClassName('info--vacancy--help')[1].className = 'info--vacancy--help';
      condition.cash = false;
    }
  }
  updateName(event) {
    this.props.dispatch(changeFullName(event.target.value));
    const name = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
    if (name.test(event.target.value)) {
      event.target.className = "info--name __completed";
      document.getElementsByClassName('info--vacancy--help')[2].className = 'info--vacancy--help __hidden';
      condition.fullName = true;
    } else {
      event.target.className = "info--name __warning";
      document.getElementsByClassName('info--vacancy--help')[2].className = 'info--vacancy--help';
      condition.fullName = false;
    }
  }
  updatePhone(event) {
    this.props.dispatch(changePhone(event.target.value));
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
    if (phone.test(event.target.value)) {
      event.target.className = "info--phone __completed";
      document.getElementsByClassName('info--vacancy--help')[3].className = 'info--vacancy--help __hidden';
      condition.phone = true;
    } else {
      event.target.className = "info--phone __warning";
      document.getElementsByClassName('info--vacancy--help')[3].className = 'info--vacancy--help';
      condition.phone = false;
    }
  }
  updateMail(event) {
    this.props.dispatch(changeMail(event.target.value));
    const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
    if (mail.test(event.target.value)) {
      event.target.className = "info--mail __completed";
      document.getElementsByClassName('info--vacancy--help')[4].className = 'info--vacancy--help __hidden';
      condition.mail = true;
    } else {
      event.target.className = "info--mail __warning";
      document.getElementsByClassName('info--vacancy--help')[4].className = 'info--vacancy--help';
      condition.mail = false;
    }
  }
  updateNationality(event) {
    this.props.dispatch(changeNationality(event.target.value));
    const nationality = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]|[А-ЯЁ][а-яё]+$/;
    if (nationality.test(event.target.value)) {
      event.target.className = "info--nationality __completed";
      document.getElementsByClassName('info--vacancy--help')[5].className = 'info--vacancy--help __hidden';
      condition.nationality = true;
    } else {
      event.target.className = "info--nationality __warning";
      document.getElementsByClassName('info--vacancy--help')[5].className = 'info--vacancy--help';
      condition.nationality = false;
    }
  }
  updateAge(event) {
    this.props.dispatch(changeAge(event.target.value));
    const age = /^\d+$/;
    if (age.test(event.target.value)) {
      event.target.className = "info--age __completed";
      document.getElementsByClassName('info--vacancy--help')[6].className = 'info--vacancy--help __hidden';
      condition.age = true;
    } else {
      event.target.className = "info--age __warning";
      document.getElementsByClassName('info--vacancy--help')[6].className = 'info--vacancy--help';
      condition.age = false;
    }
  }
  updateMarried(event) {
    this.props.dispatch(changeMarried(event.target.value));
    const married = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]|[А-ЯЁ][а-яё]+$/;
    if (married.test(event.target.value)) {
      event.target.className = "info--married __completed";
      document.getElementsByClassName('info--vacancy--help')[7].className = 'info--vacancy--help __hidden';
      condition.married = true;
    } else {
      event.target.className = "info--married __warning";
      document.getElementsByClassName('info--vacancy--help')[7].className = 'info--vacancy--help';
      condition.married = false;
    }
  }
  updateEducation(event) {
    this.props.dispatch(changeEducation(event.target.value));
    const eucation = /^[А-ЯЁ][а-яё]+ [а-яё]|[А-ЯЁ][а-яё]+$/;
    if (eucation.test(event.target.value)) {
      event.target.className = "info--eucation __completed";
      document.getElementsByClassName('info--vacancy--help')[8].className = 'info--vacancy--help __hidden';
      condition.education = true;
    } else {
      event.target.className = "info--eucation __warning";
      document.getElementsByClassName('info--vacancy--help')[8].className = 'info--vacancy--help';
      condition.education = false;
    }
  }
  updateDate(event) {
    this.props.dispatch(changeDate(event.target.value));
    condition.date = true;
  }
  updateExperience(event) {
  const experienceList = document.getElementById('info--experience');
    if ( experienceList.selectedIndex != -1) {
      this.props.dispatch(changeExperience(experienceList.options[experienceList.selectedIndex].text));
      condition.experience = true;
    }
  }
  updateGender(event) {
  const genderList = document.getElementById('info--gender');
  if ( genderList.selectedIndex != -1) {
      this.props.dispatch(changeGender(genderList.options[genderList.selectedIndex].text));
      condition.gender = true;
    }
  }
  updateValid(event) {
    if (document.getElementById('valid').checked) {
        this.props.dispatch(changeValid("+"));
        condition.valid = true;
    } else {
      this.props.dispatch(changeValid("-"));
      condition.valid = false;
    }
  }
  // REVIEW: все приватные методы предлагаю именовать с префиксом "_"
  checkCondition(data) {
    let condition = false;
    for (let i in data) {
      if (data[i]) {
        condition = true;
      } else {
        return false
      }
    }
    return condition;
  }
  send(event) {
    let storage = new Storage();
    // REVIEW: есть предположение, что это условие не срабатывает
    if (this.checkCondition(condition) && document.getElementById('valid').checked) {
        storage.addData(Math.random(),this.props.user);
    } else {
      alert("Данные не подтверждены")
    }
  }
  render() {
    return (
      // REVIEW:
      // 1. Мне не нравится спроектированная структура.
      // По сути это форма, так пусть и будет формой.
      // Предлагаю такую структуру:
      // form.form
      //  div.form--row
      //    label.form--label
      //    input.form--input
      //  ...
      //  div.form--actions
      //    button.form--button
      // 2. Ты изначально выделял каждый элемент как отдельный компонент, а можно сделать один универсальный
      // компонент (строка формы), в который передавать название, тип и обработчик. Так будет компактнее.
      <section className="info">
        <span>Вакансия</span>
        <input type="text" className="info--vacancy" onChange={this.updateVacancy.bind(this)}/>
        <div className="info--vacancy--help __hidden">Название вакансии на русском языке</div>
        <span>Желаемая зарплата</span>
        <input type="text" className="info--cash" onChange={this.updateCash.bind(this)}/>
        <div className="info--vacancy--help __hidden">Поле заполняется числами без указания валюты</div>
        <span>ФИО</span>
        <input type="text" className="info--fullName" onChange={this.updateName.bind(this)}/>
        <div className="info--vacancy--help __hidden">Введите ФИО полностью</div>
        <span>Контактный телефон</span>
        <input type="text" className="info--phone" onChange={this.updatePhone.bind(this)}/>
        <div className="info--vacancy--help __hidden">Вводить телефон только цифрами без символов - ()</div>
        <span>Mail</span>
        <input type="text" className="info--mail" onChange={this.updateMail.bind(this)}/>
        <div className="info--vacancy--help __hidden">Обязательное поле</div>
        <span>Гражданство</span>
        <input type="text" className="info--nationality" onChange={this.updateNationality.bind(this)}/>
        <div className="info--vacancy--help __hidden">На русском языке</div>
        <span>Пол</span>
        <select name="gender" id="info--gender" onClick={this.updateGender.bind(this)} >
          <option value="0"> М </option>
          <option value="1"> Ж </option>
        </select>
        <span>Возраст</span>
        <input type="text" className="info--age" onChange={this.updateAge.bind(this)}/>
        <div className="info--vacancy--help __hidden">Возраст вводить числом</div>
        <span>Семейное положение</span>
        <input type="text" className="info--married" onChange={this.updateMarried.bind(this)}/>
        <div className="info--vacancy--help __hidden">Обязательное поле</div>
        <span>Образование</span>
        <input type="text" className="info--education" onChange={this.updateEducation.bind(this)}/>
        <div className="info--vacancy--help __hidden">Обязательное поле</div>
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
