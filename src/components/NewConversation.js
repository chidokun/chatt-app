import React, { Component } from 'react';
import { Menu, Icon, Button, Modal, Input } from 'antd';

class NewConversation extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
      render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
          <div>
            <Button type='dashed'><Icon type='plus-circle' onClick={this.showModal}/>New conversation</Button>
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
          </div>
        );
      }
}

export default NewConversation;
