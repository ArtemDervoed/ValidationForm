/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './Form';
import Document from './Document';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h2>Бланк №007</h2>
        </header>
        <main className="content">
          <Form />
          <Document />
        </main>
        <footer className="footer">Подпись________</footer>
      </div>
    );
  }
}
