import React from 'react';
import {connect} from 'react-redux';
// import* as actions from './../actions/actions';
// чет какой то косяк с импортом
@connect((store) => {
  return {
    user: store.user,
  };
})
export default class Form extends React.Component {
  componentWillMount() {
    // console.log(actions);
    // this.props.dispatch(actions.changeFullName("LolLOOOOl"));
    // не работает
  }

  render() {
    return (
      <section className="info">
        <span>Вакансия</span>
        <input type="text" className="info--vacancy" />
        <span>Желаемая зарплата</span>
        <input type="text" className="info--cash" />
        <span>ФИО</span>
        <input type="text" className="info--fullName" />
        <span>Контактный телефон</span>
        <input type="text" className="info--phone" />
        <span>Mail</span>
        <input type="text" className="info--mail" />
        <span>Гражданство</span>
        <input type="text" className="info--nationality" />
        <span>Пол</span>
        <select name="sex" className="info--sex" >
          <option value="male">М</option>
          <option value="female">Ж</option>
        </select>
        <span>Возраст</span>
        <input type="text" className="info--age" />
        <span>Семейное положение</span>
        <input type="text" className="info--married" />
        <span>Образование</span>
        <input type="text" className="info--education" />
        <span>Опыт работы</span>
        <select name="experience" className="info--experience" >
          <option value="none">Отсутствует</option>
          <option value="oneYear">1 год</option>
          <option value="twoYear">2 года</option>
          <option value="fiveYear">5 лет</option>
          <option value="moreFiveYear">Более 5 лет</option>
        </select>
        <span>Дата</span>
        <input type="date" className="info--date" />
        <span>Разрешаю обработку личных данных</span>
        <input type="checkbox" className="valid" />
        <button className="submit" >Отправить </button>
      </section>
    );
  }
}
