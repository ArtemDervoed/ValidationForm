import React from 'react'
export default class UserInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="info--block">
          <span>Вакансия</span>
          <input type="text" id="vacancy" />
        </div>
        <div className="info--block">
          <span>Желаемая зарплата</span>
          <input type="text" id="pay" />
        </div>
        <div className="info--block">
          <span>ФИО</span>
          <input type="text" id="FIO" />
        </div>
        <div className="info--block">
          <span>Контактный телефон</span>
          <input type="text" id="phone" />
        </div>
        <div className="info--block">
          <span>Mail</span>
          <input type="text" id="mail" />
        </div>
      </div>
    );
  }
}
