import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../styles/style.css';
const { Content } = Layout;


class UserHeaderControl extends Component {
    render() {
        return (
            <Content>
                <div className='chat-frame-intro'>
                    <div className="title">No conversation</div>
                    <div className="subtitle">Please select a user or create new conversation to continue</div>                    
                </div>
            </Content>
        );
    }
}

export default UserHeaderControl;
