import React from 'react';
import UserInfo from './Section/UserInfo';
import StatusInfo from './Section/StatusInfo';
import CountryInfo from './Section/CountryInfo';
import MoreInfo from './Section/MoreInfo';

export default class Section extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="info">
        <UserInfo className="info--user"/>
        <StatusInfo className="info--status" />
        <CountryInfo className="info--country"/>
        <MoreInfo className="info--more"/>
        <button className="info--sumbit">Отправить </button>
      </section>
    );
  }
}
