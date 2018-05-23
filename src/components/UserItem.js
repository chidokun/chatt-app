import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../styles/style.css';

class UserItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (  
            <div className="user-item" key={this.props.name}>
                <Icon type={this.props.group == 'true' ? 'profile' : 'user'}/>
                <span className="nav-text">{this.props.name}</span>
            </div>
        );
    }
}

export default UserItem;
