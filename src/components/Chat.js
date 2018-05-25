import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../styles/style.css';
import { Button, Input, Avatar } from 'antd';
import UserItem from './UserItem';
import SidebarContainer from '../containers/SidebarContainer';
import ChatContent from './ChatContent';
import ChatHeaderContainer from '../containers/ChatHeaderContainer';
import NewConversation from './NewConversation';
const Send = Input.Search;
const { Header, Content, Footer, Sider } = Layout;


class Chat extends Component {
    render() {
        return (
            <Layout className='chat-container'>
                <SidebarContainer />
                <Layout>
                <ChatHeaderContainer />
                <ChatContent />
                <Footer>
                    <Send placeholder='Enter your message' enterButton="Send" size='large' />
                </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Chat;
