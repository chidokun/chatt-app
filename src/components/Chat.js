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
    }

    handleLoadList() {
        $.get('/channels').query({
            user: this.props.sign.user,
            token: this.props.sign.token
        }).then((res) => {
            console.log(res);
            if (res.body.status === 200) {
                this.props.loadChannelList(res.body.list);
            }
        }).catch((err) => {
            console.log(err);
        });
        $.get('/conversations').query({
            user: this.props.sign.user,
            token: this.props.sign.token
        }).then((res) => {
            console.log(res);
            if (res.body.status === 200) {
                this.props.loadConversationList(res.body.list);
            }
        }).catch((err) => {
            console.log(err);
        });
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
