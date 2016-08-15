import React from 'react'
export default class UserInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <span>Вакансия: </span> <span></span>
          <span>Желаемая зарплата: </span> <span></span>
        </div>
        <div>
          <span>ФИО: </span> <span></span>
        </div>
        <div>
          <span>Контактный телефон: </span> <span></span>
        </div>
        <div>
          <span>mail: </span> <span></span>
        </div>
      </div>
    );
  }
}
