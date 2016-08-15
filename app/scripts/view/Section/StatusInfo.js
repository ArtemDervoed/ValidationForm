import React from 'react'
export default class StatusInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="info--block">
          <span>Пол</span>
          <input type="text" id="sex" />
        </div>
        <div className="info--block">
          <span>Возраст</span>
          <input type="text" id="age" />
        </div>
        <div className="info--block">
          <span>Семейное положение</span>
          <input type="text" id="family-status" />
        </div>
        <div className="info--block">
          <span>Образование</span>
          <input type="text" id="education" />
        </div>
        <div className="info--block">
          <span>Опыт работы</span>
          <input type="text" id="practicle-skills" />
        </div>
      </div>
    );
  }
}
