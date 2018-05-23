import React, { Component } from 'react';
import { Actions } from '../constants';
import Chat from './Chat';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const { sign, page } = this.props;
    if (page == Actions.PAGE_SIGNUP) {
      return <SignUpContainer />;
    } else if (page == Actions.PAGE_CHAT) {
      return <Chat />;
    } else {
      return <LoginContainer />;
    }
  }
}

export default App;
