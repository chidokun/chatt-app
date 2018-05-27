import React, { Component } from 'react';
import { Form, Icon, Input, Button, notification } from 'antd';
import '../styles/style.css';
import logo from '../styles/logo.png';
import { $ } from '../utils/api';
const FormItem = Form.Item;

class LoginForm extends Component {

    componentDidMount() {
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('token');
        if (user && token) {
            this.props.login(user, token);
            this.props.pageChat();     
        } 
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                $.get('/users/login').query({
                    user: values.userName,
                    password: values.password
                }).then((res) => {
                    console.log(res);
                    if (res.body.status === 200) {
                      this.props.login(res.body.user, res.body.token);
                      localStorage.setItem('user', res.body.user);
                      localStorage.setItem('token', res.body.token);
                      this.props.pageChat();
                    } else {
                        notification.open({
                            message: 'Login unsuccessfully',
                            description: res.body.message
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        });
    }

    handleSignUp = (e) => {
        this.props.pageSignUp();
    }
      
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleLogin} className="login-form container">
            <FormItem style={{ textAlign: 'center'}}>
                <img src={logo} alt='' />
            </FormItem>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              &nbsp;or <a onClick={this.handleSignUp}>Sign up</a>
            </FormItem>
          </Form>
        );
    }
}
    
const Login = Form.create()(LoginForm);

export default Login;
