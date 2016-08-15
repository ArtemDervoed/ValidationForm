import React from 'react'
export default class CountryInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="info--block">
          <span>Гражданство</span>
          <input type="text" id="nationality" />
        </div>
        <div className="info--block">
          <span>Район проживания</span>
          <input type="text" id="living-area" />
        </div>
        <div className="info--block">
          <span>Наличие водительских прав</span>
          <input type="text" id="driver-license" />
        </div>
      </div>
    );
  }
}
