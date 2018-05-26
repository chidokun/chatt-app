import React, { Component } from 'react';
import { Form, Input, Icon, Button, notification } from 'antd';
import logo from '../styles/logo.png';
import { $ } from '../utils/api';
import '../styles/style.css';

const FormItem = Form.Item;

class SignUpForm extends Component {
    
    handleSignUp = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                $.post('/users').query({
                    user: values.userName,
                    password: values.password
                }).then((res) => {
                    console.log(res);
                    if (res.body.status === 200) {
                        this.props.signUp();
                        notification.open({
                            message: 'Sign up successfully',
                            description: 'Please login now'
                        });
                        this.props.pageLogin();
                    } else {
                        notification.open({
                            message: 'Sign up unsuccessfully',
                            description: res.body.message
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        });
    }

    handleLogin = (e) => {
        this.props.pageLogin();
    }
  
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSignUp} className="login-form container">
            <FormItem style={{ textAlign: 'center'}}>
                <img src={logo} alt=''/>
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
                Sign up
            </Button>
            &nbsp;or <a onClick={this.handleLogin}>Login</a>
            </FormItem>
        </Form>
        );
    }
}

const SignUp = Form.create()(SignUpForm);

export default SignUp;
