import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../styles/style.css';

class UserItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (  
            <li key={this.props.name}>
                <Icon type="user" style={this.props.online == 'true' ? {color:'#1DA57A'} : {}} />
                <span className="nav-text">{this.props.name}</span>
            </li>
        );
    }
}

export default UserItem;
