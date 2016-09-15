/* eslint-disable no-unused-vars */
import 'styles/index.css';
import {render} from 'react-dom';
import React from 'react';
import {Provider}	from	'react-redux';
import {store} from './store/store';
import Layout from './view/layout';

export default class Application {
  start() {
    render(
      <Provider	store={store} >
        <Layout />
      </Provider>,
       document.getElementById('app'));
  }
}
