import React, { Component } from 'react';
import { Icon, Button, Input, Modal, notification } from 'antd';
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
        var failure = (err) => {
            notification.open({
                message: 'Unsuccessfully',
                description: err.message
            });
            this.setState({ visible: false });
        };
        if (name.includes('#')) {
            $.post('/channels').query({
                user: this.props.sign.user,
                channel: name.substr(1),
                token: this.props.sign.token
            }).then((res) => {
                console.log(res);
                if (res.body.status === 200) {
                    this.props.createChannel(res.body.channel);
                    notification.open({
                        message: 'Successfully',
                        description: res.body.message
                    });
                    this.props.changeCurrentChat({ type: 'channel', id: name.substr(1), name: name.substr(1) });
                    this.input.input.value = '';
                } else {
                    notification.open({
                        message: 'Unsuccessfully',
                        description: res.body.message
                    });
                }
                this.setState({ visible: false });
            }).catch(failure);
        } else {
            $.post('/conversations').query({
                user: this.props.sign.user,
                toUser: name,
                token: this.props.sign.token
            }).then((res) => {
                console.log(res);
                if (res.body.status === 200) {
                    this.props.createConversation({
                        conId: res.body.conId,
                        user: name,
                        latestMsgId: 0,
                        currMsgId: 0
                    });
                    notification.open({
                        message: 'Successfully',
                        description: res.body.message
                    });
                    this.props.changeCurrentChat({ type: 'user', id: res.body.conId, name });
                    this.input.input.value = '';
                } else {
                    notification.open({
                        message: 'Unsuccessfully',
                        description: res.body.message
                    });
                }
                this.setState({ visible: false });
            }).catch(failure);
        }
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({ visible: false });
        this.input.input.value = '';
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
