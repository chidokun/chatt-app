import React, { Component } from 'react';
import { Icon, Badge } from 'antd';
import { $ } from '../utils/api';
import '../styles/style.css';

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick() {
        var type = this.props.group ? 'channel' : 'user';
        var id = this.props.id;
        var name = this.props.name;
        this.props.changeCurrentChat({ type, id, name });

        if (type === 'channel') {
            $.get('/channels/' + id).query({
                user: this.props.sign.user,
                token: this.props.sign.token
            }).then((res) => {
                console.log(res);
                if (res.body.status === 200) {
                  this.props.loadChannelMessage(res.body.list);
                }
            }).catch((err) => {
                console.log(err);
            });
        } else if (type === 'user') {
            $.get('/conversations/' + id).query({
                user: this.props.sign.user,
                token: this.props.sign.token
            }).then((res) => {
                console.log(res);
                if (res.body.status === 200) {
                  this.props.loadConversationMessage(res.body.list);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    render() {
        return (  
        <div className="user-item" key={this.props.name} onClick={this.handleItemClick}>
            <Icon type={this.props.group ? 'profile' : 'user'}/>
            <span className="nav-text">{this.props.name}</span>
            <div style={{float: 'right'}}>
            { this.props.numNewMsg > 0 
                ? <Badge count={this.props.numNewMsg} /> 
                : <div /> }
            </div>
        </div>
        );
    }
}

export default UserItem;
