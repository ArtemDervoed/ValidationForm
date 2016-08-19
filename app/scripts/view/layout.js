import React, {Component} from 'react';
import Header from './header';
import Section from './section';
import Footer from './footer';
// REVIEW: подобные презентационные компоненты рекомендуется реализовать
// с помощью stateless functions
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}
