import React, { Component } from 'react';
import { Layout } from 'antd';
import ChatItem from './ChatItem';
import '../styles/style.css';
const { Content } = Layout;


class ChatContent extends Component {
    render() {
        if (this.props.message.length === 0) {
            return (
                <Content>
                    <div className='chat-frame-intro'>
                        <div className="title">No conversation</div>
                        <div className="subtitle">Please select a user or create new conversation to continue</div>                    
                    </div>
                </Content>
            );
        } else {
            return (
            <Content style={{overflow:'auto'}}>
            { this.props.message.map(({user, time, message}) =>
                <ChatItem user={user} time={time} msg={message} isMine={user === this.props.sign.user} />
            )}
            </Content>    
            );
        }    
    }
}

export default ChatContent;
