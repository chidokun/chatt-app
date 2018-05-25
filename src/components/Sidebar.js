import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import UserItemContainer from '../containers/UserItemContainer';
import NewConversationContainer from '../containers/NewConversationContainer';
import '../styles/style.css';
const { Sider } = Layout;

class Sidebar extends Component {
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
                <UserItemContainer name={channel} group={true} id={channel} numNewMsg={latestMsgId - currMsgId} />
            )}
            { conversation.map( ({conId, user, latestMsgId, currMsgId}) => 
                <UserItemContainer name={user} group={false} id={conId} numNewMsg={latestMsgId - currMsgId} />
            )}
            </Menu>           
        </Sider>
        );
    }
}

export default Sidebar;
