import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../styles/style.css';
import { Button, Input, Avatar } from 'antd';
import UserItem from './UserItem';
import UserList from './UserList';
import ChatContent from './ChatContent';
import UserHeaderName from './UserHeaderName';
import NewConversation from './NewConversation';
import UserHeaderControlContainer from '../containers/UserHeaderControlContainer';
const Send = Input.Search;
const { Header, Content, Footer, Sider } = Layout;


class Chat extends Component {
    render() {
        return (
            <Layout className='chat-container'>
                <Sider className='chat-slider'
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                <div className='chat-slider-top'>
                    <div className='logo'></div>
                    <NewConversation></NewConversation>
                </div>
                <UserList />             
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                <div className='chat-header'>
                    <UserHeaderName />
                    <UserHeaderControlContainer />
                </div>
                </Header>
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
