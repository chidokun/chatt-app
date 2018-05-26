import React, { Component } from 'react';
import { Actions } from '../constants';
import ChatContainer from '../containers/ChatContainer';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';

class App extends Component {
    render() {
        const { page } = this.props;
        switch (page) {
            case Actions.PAGE_SIGNUP:
                return <SignUpContainer />;
            case Actions.PAGE_CHAT:
                return <ChatContainer />;
            default:
                return <LoginContainer />;
        }          
    }
}

export default App;
