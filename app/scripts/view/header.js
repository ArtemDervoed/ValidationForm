import React from 'react';

export default class Header extends React.Component {
  // REVIEW: бесполезный тут метод, конструктор родителя и так вызовется,
  // если он не переопределён
  // про stateless functions уже писала
  constructor() {
    super();
  }
  // REVIEW: если придираться, тут есть орфографическая ошибка))
  render() {
    return (
      <header>
        <h1>
        Резюме кондидата
        </h1>
      </header>
    );
  }
}
