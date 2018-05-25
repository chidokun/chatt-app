import React, { Component } from 'react';
import '../styles/style.css';

class ChatItem extends Component {
    render() {
        var time = new Date().setTime(this.props.time);
        var timeString = time.toLocaleString('vi-VN', { timeZone: 'Asia/Bangkok' })
        return (
            <div className={'chat-item ' + (this.props.isMine === true ? 'right' : '')}>
                <div className="chat-item-name">{this.props.user} - {timeString}</div>
                <div className="chat-item-message">{this.props.msg}</div>                    
            </div>
        );
    }     
}

export default ChatItem;
