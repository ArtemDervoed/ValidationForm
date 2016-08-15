import 'styles/index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './view/layout';
import Storage from './storage';

export default class Application {
  constructor() {
    this.$document = $(document);
  }
  start() {
    ReactDOM.render(
        <Layout />
      , document.getElementById('app'));
  }
}
