// REVIEW: не пойму, зачем тебе 2 абсолютно одинаковые папки с файлами (view, page)
// избавься от лишних
import 'styles/index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './view/layout';
import PageLayout from './page/layout';
//  REVIEW: Неиспользуемая переменная, в консоль warning'и не сыпятся?
import Storage from './storage';

export default class Application {
  constructor() {
    // REVIEW: опять неиспользуемая переменная
    this.$document = $(document);
  }
  start() {
    // REVIEW: из всего ReactDOM ты тут используешь только метод render,
    // поэтому предлагаю оптимизировать и импортировать только метод render
    // import {render} from 'react-dom';
    // и тут вызывать уже его
    // REVIEW: неочевидно названы компоненты - при первом взгляде на
    // код рендера непонятно, что имеется в виду под Layout, а что - под PageLayout
    ReactDOM.render(
      <div className="application">
        <Layout />
        <PageLayout />
      </div>
      , document.getElementById('app'));
  }
}
