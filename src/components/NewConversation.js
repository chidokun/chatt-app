import React, { Component } from 'react';
import { Icon, Button, Input, Modal } from 'antd';
import { $ } from '../utils/api';

class NewConversation extends Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        var name = this.input.input.value;
        if (name.includes('#')) {
            $.put('/channels').query({
                user: this.props.sign.user,
                channel: name.substr(1),
                token: this.props.sign.token
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            $.post('/conversations').query({
                user: this.props.sign.user,
                toUser: name,
                token: this.props.sign.token
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Button type="dashed" onClick={this.showModal}><Icon type='plus-circle'/>New conversation</Button>
                <Modal
                    title="New conversation"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                <p>Enter name of user or begin with "<b>#</b>" if you want to create new channel</p>
                <Input ref={(ref) => { this.input = ref; }} placeholder='Enter name' />
                </Modal>
            </div>
        );
    }
}

export default NewConversation;
