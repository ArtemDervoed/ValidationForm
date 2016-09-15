/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './form';
import Document from './document';

export default class Layout extends React.Component {
  render() {
    const Header = () => <h2> Резюме </h2>;
    const Footer = () => <div> Подпись__________________ </div>;
    return (
      <div>
        <Header className="main-header" />
        <section className="content">
          <Form />
          <Document />
        </section>
        <Footer className="main-footer" />
      </div>
    );
  }
}
