import React, { Component } from 'react';
import { Layout, Menu, Button, Input } from 'antd';
import UserItem from './UserItem';
import NewConversationContainer from '../containers/NewConversationContainer';
import { $ } from '../utils/api';
import '../styles/style.css';
const { Sider } = Layout;

class Sidebar extends Component {
    constructor() {
        super();
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e) {
        var type = e.group ? 'channel' : 'user';
        var id = e.id;
        var name = e.name;
        this.props.changeCurrentChat({ type, id, name });
    }

    render() {
        const { channel, conversation } = this.props;
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
            { channel.map( ({channel, latestMsgId, currMsgId}) => 
                <UserItem name={channel} group='true' id={channel} numNewMsg={latestMsgId - currMsgId} />
            )}
            { conversation.map( ({conId, user, latestMsgId, currMsgId}) => 
                <UserItem name={user} group='true' id={conId} numNewMsg={latestMsgId - currMsgId} />
            )}
            </Menu>           
        </Sider>
        );
    }
}

export default Sidebar;
