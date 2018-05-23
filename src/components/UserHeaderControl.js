import React, { Component } from 'react';
import '../styles/style.css';
import { Button, notification  } from 'antd';


class UserHeaderControl extends Component {

    handleLogOut = (e) => {
        this.props.logOut();
        notification.open({
            message: 'Logout successfully',
            description: 'Please login again'
        });
        this.props.pageLogin();
    }

    render() {
        return (
            <div className='chat-header-right'>
                <div className='current-user-name'>
                    <span className='user-name'>{this.props.sign.user}</span>
                    <span className='subtitle'> (Logged in) </span>
                </div>
                <Button icon='logout' type='primary' shape='circle' onClick={this.handleLogOut} />
            </div>
        );
    }
}

export default UserHeaderControl;
