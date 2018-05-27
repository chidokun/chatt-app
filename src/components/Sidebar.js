import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import UserItemContainer from '../containers/UserItemContainer';
import NewConversationContainer from '../containers/NewConversationContainer';
import '../styles/style.css';
const { Sider } = Layout;

class Sidebar extends Component {
    render() {
        const { channel, conversation } = this.props;
        var arrChannel = [], arrConversation = [];
        for (var i in channel) {
            if (channel.hasOwnProperty(i)) {
                arrChannel.push(channel[i]);
            }
        }
        for (var j in conversation) {
            if (conversation.hasOwnProperty(j)) {
                arrConversation.push(conversation[j]);
            }
        }
        return (
        <Sider className='chat-slider'
            breakpoint="md"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
            <div className='chat-slider-top'>
                <NewConversationContainer></NewConversationContainer>
            </div>
            <Menu theme="light" mode="inline">
            { arrChannel.map( ({channel, latestMsgId, currMsgId}) => 
                <UserItemContainer key={channel} name={channel} group={true} id={channel} numNewMsg={latestMsgId - currMsgId} />
            )}
            { arrConversation.map( ({conId, user, latestMsgId, currMsgId}) => 
                <UserItemContainer key={conId} name={user} group={false} id={conId} numNewMsg={latestMsgId - currMsgId} />
            )}
            </Menu>           
        </Sider>
        );
    }
}

export default Sidebar;
