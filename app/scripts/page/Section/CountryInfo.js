import React from 'react'
export default class CountryInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <span>Гражданство: </span> <span></span>
        </div>
        <div>
          <span>Район проживания: </span> <span></span>
        </div>
        <div>
          <span>Дата: </span> <span></span>
        </div>
      </div>
    );
  }
}
