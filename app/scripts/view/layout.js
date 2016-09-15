/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './form';
import Document from './document';

export default class Layout extends React.Component {
  render() {
    const Header = () => <div className="main-header"> Резюме </div>;
    const Footer = () => <div className="main-footer"> Подпись__________________ </div>;
    return (
      <div>
        <Header />
        <section className="content">
          <Form />
          <Document />
        </section>
        <Footer />
      </div>
    );
  }
}
