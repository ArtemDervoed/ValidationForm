import React from 'react';
import UserInfo from './Section/UserInfo';
import StatusInfo from './Section/StatusInfo';
import CountryInfo from './Section/CountryInfo';

export default class Section extends React.Component {
  constructor() {
    super();
  }

  apply() {

  }
  render() {
    return (
      <section className="info">
        <UserInfo className="info--user"/>
        <StatusInfo className="info--status" />
        <CountryInfo className="info--country"/>
      </section>
    );
  }
}
