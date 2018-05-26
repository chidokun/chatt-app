import React, { Component } from 'react';
import { Layout } from 'antd';
import ChatItem from './ChatItem';
import '../styles/style.css';
const { Content } = Layout;

class ChatContent extends Component {
    render() {
        const { message, currentChat, sign } = this.props;
        if (message.length === 0) {
            return ( <Content>
                <div className='chat-frame-intro'>
                    <div className="title"> {
                        currentChat.id.length === 0 
                        ? 'No conversation' 
                        : 'Let\'s start!'
                    } </div>
                    <div className="subtitle"> {
                        currentChat.id.length === 0 
                        ? 'Please select a user, channel or create new conversation to continue'
                        : 'Send some interesting messages to start'
                    } </div>                    
                </div>
            </Content> );
        } else {
            return ( 
            <Content style={{overflow:'auto'}}>
            { message.map(({msgId, user, time, message}) =>
                <ChatItem key={msgId} user={user} time={time} msg={message} isMine={user === sign.user} />
            )}
            </Content>    
            );
        }    
    }
}

export default ChatContent;
