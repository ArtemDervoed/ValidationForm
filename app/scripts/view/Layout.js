/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './Form';
import Document from './Document';

// REVIEW: Почему ты решил использовать префикс main- для хедера и футера?
// Предлагаю тебе подумать, как лучше назвать классы самых высокоуровневых
// элементов (хедер, контент, футер) и почему так
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header className="top-header">
          <h2>Бланк №007</h2>
        </header>
        <section className="content">
          <Form />
          <Document />
        </section>
        <footer className="bottom-footer">Подпись________</footer>
      </div>
    );
  }
}
