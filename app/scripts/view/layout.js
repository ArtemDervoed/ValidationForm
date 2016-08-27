import React from 'react';
import Form from './form';
import Page from './page';

export default class Layout extends React.Component {
  render() {
    const Header = () => <div> Резюме </div>;
    const Footer = () => <div> Подпись__________________ </div>;
    return(
      <div>
        <Header />
        <section className="container">
          <Form />
          <Page />
        </section>
        <Footer />
      </div>
    );
  }
}
