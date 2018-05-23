import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../styles/style.css';
import { Button, Input, Avatar } from 'antd';
import UserItem from './UserItem';
import NewConversation from './NewConversation';
const { Header, Content, Footer, Sider } = Layout;


class UserList extends Component {
    render() {
        return (
                <Menu theme="light" mode="inline">
                    <UserItem name="user 1" online='true' />
                    <UserItem name="user 2" online='false' />
                </Menu>               
        );
    }
}

export default UserList;
