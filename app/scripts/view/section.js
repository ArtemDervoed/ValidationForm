import React from 'react';
import UserInfo from './Section/UserInfo';
import StatusInfo from './Section/StatusInfo';
import CountryInfo from './Section/CountryInfo';

export default class Section extends React.Component {
  constructor() {
    super();
  }
  // REVIEW: предполагаю, что в будущем данный метод будет использоваться и будет
  // непустым, но сейчас это выглядит странно
  apply() {
    
  }
  // REVIEW: непонятна логика разделения на компоненты UserInfo, StatusInfo, CountryInfo
  // по сути, это всё относится к инфе о пользователе
  render() {
    return (
      <section className="info">
        <UserInfo className="info--user"/>
        <StatusInfo className="info--status" />
        <CountryInfo className="info--country"/>
        <div className="info--block">
          <span>Дата</span>
          <input type="text" id="data" />
        </div>
        <button className="info--sumbit">Отправить </button>
      </section>
    );
  }
}
