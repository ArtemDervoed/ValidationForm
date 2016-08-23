import React from 'react';

export default class Form extends React.Component {

  render() {
    return(
      <section className="info">
        <span>Вакансия</span>
        <input type="text" className="info--vacancy" />
        <span>Желаемая зарплата</span>
        <input type="text" className="info--cash" />
        <span>ФИО</span>
        <input type="text" className="info--FIO" />
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
        <button className="info--sumbit" >Отправить </button>
      </section>
    )
  }
}
