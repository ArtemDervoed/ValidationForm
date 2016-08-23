import 'styles/index.css';
import {render} from 'react-dom';
import React from 'react';
import Form from './view/form';
import Page from './view/page';
// import Storage from './storage';

export default class Application {
  start() {
    const Header = (props) => <div> Резюме {props.name}</div>;
    const Footer = (props) => <div> Подпись {props.description}</div>;
    render(
      <div>
        <Header name="User" />
        <section className="container">
          <Form />
          <Page />
        </section>
        <Footer description="_____________" />
      </div>,
       document.getElementById("app"));
  }
}
