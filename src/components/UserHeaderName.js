import React, { Component } from 'react';
import '../styles/style.css';
import { Avatar } from 'antd';


class UserHeaderName extends Component {
    render() {
        return (
            <div className='chat-header-left'>
                <Avatar size='large' style={{ backgroundColor: '#87d068' }} icon={this.props.group == 'true' ? 'profile' : 'user'} />
                <span className='user-name'>{this.props.name}</span>
            </div>
        );
    }
}

export default UserHeaderName;
