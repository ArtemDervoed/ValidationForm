import React from 'react'
export default class MoreInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="info--block">
          <span>Дополнительная информация</span>
          <input type="text" id="more" />
        </div>
        <div className="info--block">
          <span>Дата</span>
          <input type="text" id="data" />
        </div>
      </div>
    );
  }
}
