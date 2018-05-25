import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import SidebarContainer from '../containers/SidebarContainer';
import ChatContentContainer from '../containers/ChatContentContainer';
import ChatHeaderContainer from '../containers/ChatHeaderContainer';
import { $ } from '../utils/api';
import '../styles/style.css';
const Send = Input.Search;
const {  Footer } = Layout;


class Chat extends Component {

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
                    <Footer>
                        <Send placeholder='Enter your message' enterButton="Send" size='large' />
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Chat;
