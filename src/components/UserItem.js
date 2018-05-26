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

        var successLoadMsg = (res) => {
            console.log(res);
            if (res.body.status === 200) {
                this.props.loadMessage(res.body.list);
            }
        }
        var failureLoadMsg = (err) => {
            console.log(err);
            this.props.loadMessage([]);
        }
        var successUpdateStatus = (res) => {
            console.log(res);
        }
        var failureUpdateStatus = (err) => {
            console.log(err);
        }

        if (type === 'channel') {
            $.get('/channels/' + id).query({
                user: this.props.sign.user,
                token: this.props.sign.token
            }).then(successLoadMsg).catch(failureLoadMsg);
            $.put('/channels/' + id).query({
                user: this.props.sign.user,
                token: this.props.sign.token
            }).then(successUpdateStatus).catch(failureUpdateStatus);
        } else if (type === 'user') {
            $.get('/conversations/' + id).query({
                user: this.props.sign.user,
                token: this.props.sign.token
            }).then(successLoadMsg).catch(failureLoadMsg);
            $.put('/conversations/' + id).query({
                user: this.props.sign.user,
                token: this.props.sign.token
            }).then(successUpdateStatus).catch(failureUpdateStatus);
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
