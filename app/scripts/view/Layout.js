/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './Form';
import Document from './Document';

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
