import 'styles/index.css';
import {render} from 'react-dom';
import React from 'react';
// REVIEW: зачем тебе в этом модуле createStore, если?
import {createStore}	from	'redux';
import {Provider}	from	'react-redux';
import {store} from './store/store';
import Layout from './view/layout';

export default class Application {
  start() {
    render(
      <Provider	store={store} >
        <Layout />
      </Provider>,
      // REVIEW: избавься от двойных кавычек там, где они не нужны
      document.getElementById("app"));
  }
}
