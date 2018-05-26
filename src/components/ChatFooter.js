import React, { Component } from 'react';
import { Layout, Input, notification } from 'antd';
import { $ } from '../utils/api';
import '../styles/style.css';
const Send = Input.Search;
const {  Footer } = Layout;

class ChatFooter extends Component {
    constructor(props) {
        super(props);
        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    handleSendMessage(e) {
        const { currentChat, sign, chatMessage } = this.props;
        var time = Date.now();
        var success = (res) => {
            console.log(res);
            if (res.body.status !== 200) {
                notification.open({
                    message: 'Can\'t send message',
                    description: res.body.message
                });
            } else {
                chatMessage({ time, user: sign.user, message: e});
                this.ref.input.input.value = '';
            }
        };
        var failure = (err) => { console.log(err) };
        if (e.length > 0) {
            if (currentChat.type === 'channel') {
                $.post('/channels/' + currentChat.id).query({
                    channel: currentChat.id,
                    user: sign.user,
                    time: time,
                    message: e,
                    token: sign.token
                }).then(success).catch(failure);
            } else {
                $.post('/conversations/' + currentChat.id).query({
                    conId: currentChat.id,
                    user: sign.user,
                    time: time,
                    message: e,
                    token: sign.token
                }).then(success).catch(failure);
            }  
        }
    }

    render() {
        const { currentChat } = this.props;
        return (
            <Footer>
                <Send ref={(ref) => this.ref = ref} 
                    disabled={currentChat.id === ''} 
                    placeholder='Enter your message' 
                    enterButton="Send" size='large' 
                    onSearch={this.handleSendMessage} />
            </Footer>
        );
    }
}

export default ChatFooter;
