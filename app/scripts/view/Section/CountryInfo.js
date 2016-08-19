import React from 'react'
export default class CountryInfo extends React.Component {
  constructor() {
    super();
  }
  // REVIEW: предлагаю убрать отсюда id - 
  // ты их нигде болье не используешь, а значит они излишни тут
  // https://css-tricks.com/the-difference-between-id-and-class/#article-header-id-9
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
      </div>
    );
  }
}
