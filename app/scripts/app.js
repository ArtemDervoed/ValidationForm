import 'styles/index.css';
import {render} from 'react-dom';
import React from 'react';
import {createStore}	from	'redux';
import {Provider}	from	'react-redux';
import {store} from './store/store';
import Layout from './view/layout';
// import Storage from './storage';

export default class Application {
  start() {
  //  store.dispatch({type:"CHANGE_NAME", payload:"Will"});
  const  userData = {
    vacansy: "",
    cash: "",
    fio: "",
    phone: "",
    mail: "",
    nationality: "",
    sex: "",
    age: "",
    married: "",
    education: "",
    experience: "",
    date: "",
    valid: ""
  }
    render(
      <Provider	store={store} >
        <Layout />
      </Provider>,
       document.getElementById("app"));
  }
}
