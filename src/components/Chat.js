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
        const { sign, loadChannelList, loadConversationList } = this.props;
        var failure = (err) => { console.log(err); };

        $.get('/channels').query({
            user: sign.user,
            token: sign.token
        }).then((res) => {
            console.log(res);
            if (res.body.status === 200) {
                loadChannelList(res.body.list);
            }
        }).catch(failure);
        $.get('/conversations').query({
            user: sign.user,
            token: sign.token
        }).then((res) => {
            console.log(res);
            if (res.body.status === 200) {
                loadConversationList(res.body.list);
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
