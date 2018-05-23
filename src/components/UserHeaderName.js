import React, { Component } from 'react';
import '../styles/style.css';
import { Avatar } from 'antd';


class UserHeaderName extends Component {
    render() {
        return (
                    <div className='chat-header-left'>
                        <Avatar size='large' style={{ backgroundColor: '#87d068' }} icon="user" />
                        <span className='user-name'>Tuan. Nguyen Le Hoang</span>
                    </div>
        );
    }
}

export default UserHeaderName;
