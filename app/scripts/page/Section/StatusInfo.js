import React from 'react'
export default class StatusInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <span>Пол: </span>
        </div>
        <div>
          <span>Возраст: </span> <span></span>
        </div>
        <div>
          <span>Семейное положение: </span> <span></span>
        </div>
        <div>
          <span>Образование: </span> <span></span>
        </div>
        <div>
          <span>Опыт работы: </span> <span></span>
        </div>
      </div>
    );
  }
}
