import React, { Component } from 'react';
import { Layout } from 'antd';
import SidebarContainer from '../containers/SidebarContainer';
import ChatContentContainer from '../containers/ChatContentContainer';
import ChatHeaderContainer from '../containers/ChatHeaderContainer';
import ChatFooterContainer from '../containers/ChatFooterContainer';
import { $ } from '../utils/api';
import '../styles/style.css';


class Chat extends Component {

    constructor(props) {
        super(props);
        this.handleLoadList = this.handleLoadList.bind(this);
        this.connectionOpened = this.connectionOpened.bind(this);
        this.connectionMessage = this.connectionMessage.bind(this);
    }

    componentDidMount() {
        const { sign } = this.props;
        if (sign.connection === null) {
            this.props.connectSocket(this.createConnection());
        }
    }

    createConnection() {
        const connection = new WebSocket('ws://localhost:10030');
        connection.onopen = this.connectionOpened;
        connection.onmessage = this.connectionMessage;
        connection.onclose = this.connectionClosed;
        connection.onerror = this.connectionError;

        return connection;
    }

    connectionOpened(e) {
        const { sign } = this.props;
        sign.connection.send(JSON.stringify({
            type: 'CONNECT',
            user: sign.user,
            token: sign.token
        }));
    }

    connectionMessage(e) {
        const { currentChat, chatMessage } = this.props;
        const data = JSON.parse(e.data);
        switch (data.type) {
            case 'RESPONSE':
                console.log(data.message);
                break;
            case 'MESSAGE_CHANNEL':
                if (currentChat.type === 'channel' 
                    && currentChat.id === data.channel.channel) {
                    chatMessage(data.message);
                } else {
                    this.props.createChannel(data.channel);
                }
                break;
            case 'MESSAGE_CONVERSATION':
                if (currentChat.type === 'user' && currentChat.id === data.con.conId) {
                    chatMessage(data.message);
                } else {
                    this.props.createConversation(data.con);
                }
                break;
            default:
                break;
        }
    }

    connectionClosed(e) {
        console.log('Close connection');
    }

    connectionError(e) {
        console.log('Close connection');
    }

    handleLoadList() {
        const { sign, loadChannelList, loadConversationList } = this.props;
        var failure = (err) => { console.log(err); };

        $.get('/channels').query({
            user: sign.user,
            token: sign.token
        }).then((res) => {
            console.log(res);
            if (res.body.status === 200) {
                var list = {};
                for (var i = 0; i < res.body.list.length; i++) {
                    list[res.body.list[i].channel] = res.body.list[i]
                }
                loadChannelList(list);
            }
        }).catch(failure);
        $.get('/conversations').query({
            user: sign.user,
            token: sign.token
        }).then((res) => {
            console.log(res);
            if (res.body.status === 200) {
                var list = {};
                for (var i = 0; i < res.body.list.length; i++) {
                    list[res.body.list[i].conId] = res.body.list[i]
                }
                loadConversationList(list);
            }
        }).catch(failure);
    }

    render() {
        this.handleLoadList();
        return (
            <Layout className='chat-container'>
                <SidebarContainer />
                <Layout style={{height:'100vh'}}>
                    <ChatHeaderContainer />
                    <ChatContentContainer />
                    <ChatFooterContainer />
                </Layout>
            </Layout>
        );
    }
}

export default Chat;
