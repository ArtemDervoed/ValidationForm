import React from 'react';

export default class Form extends React.Component {

  render() {
    return(
      <section className="info">
        <span>Вакансия</span>
        <input type="text" />
        <span>Желаемая зарплата</span>
        <input type="text" />
        <span>ФИО</span>
        <input type="text" />
        <span>Контактный телефон</span>
        <input type="text" />
        <span>Mail</span>
        <input type="text" />
        <span>Гражданство</span>
        <input type="text" />
        <span>Пол</span>
        <select name="sex">
          <option value="male">М</option>
          <option value="female">Ж</option>
        </select>
        <span>Возраст</span>
        <input type="text" />
        <span>Семейное положение</span>
        <input type="text" />
        <span>Образование</span>
        <input type="text" />
        <span>Опыт работы</span>
        <select name="experience">
          <option value="none">Отсутствует</option>
          <option value="female">1 год</option>
          <option value="female">2 года</option>
          <option value="female">5 лет</option>
          <option value="female">Более 5 лет</option>
        </select>
        <span>Дата</span>
        <input type="text"/>
        <span>Разрешаю обработку личных данных</span>
        <input type="checkbox" />
        <button className="info--sumbit">Отправить </button>
      </section>
    )
  }
}
