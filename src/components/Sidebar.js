import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../styles/style.css';
import { Button, Input, Avatar } from 'antd';
import UserItem from './UserItem';
import ChatContent from './ChatContent';
import UserHeaderName from './UserHeaderName';
import NewConversationContainer from '../containers/NewConversationContainer';
import UserHeaderControlContainer from '../containers/UserHeaderControlContainer';
import { $ } from '../utils/api';
const Send = Input.Search;
const { Header, Content, Footer, Sider } = Layout;

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    handleLoadList() {
        $.get('/channels').query({
            user: this.props.sign.user,
            token: this.props.sign.token
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        //this.props.loadChannelList();
        //this.props.loadConversationList();
    }


    render() {
        this.handleLoadList();
        return (
            <Sider className='chat-slider'
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
                <div className='chat-slider-top'>
                    <div className='logo'></div>
                    <NewConversationContainer></NewConversationContainer>
                </div>
                <Menu theme="light" mode="inline">
                    <UserItem name="user 1" group='true' />
                    <UserItem name="user 2" group='false' />
                </Menu>           
            </Sider>
        );
    }
}

export default Sidebar;
