import cookies from 'cookies';
import ReactDOM from 'react-dom';
import React from 'react';
import customStyles from 'styles/index.css';

$(document).ajaxSend((event, jqxhr, settings) => {
  if (settings.type !== 'GET') {
    return jqxhr.setRequestHeader('X-CSRF-Token', cookies.get('CSRF-Token'));
  }
});

export default class Application {
  constructor() {
    this.$document = $(document);
  };

  start() {
    const ContactList = React.createClass({
      render: () => {
        return (
          <div className='messsage-box'>
            Hello Message
          </div>
        );
      }
    });
    ReactDOM.render(
      <ContactList />,
       document.getElementById('container')
    );
  }
}
