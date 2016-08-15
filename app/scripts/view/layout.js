import React, {Component} from 'react';
import Header from './header';
import Section from './section';
import Footer from './footer';

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
