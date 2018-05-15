import React from 'react';
import Logo from '../../component/logo/Logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    this.props.history.push('/register');
  }
  render(){
    return (<div>
      <Logo />
      <h1>Login page</h1>
      <WingBlank>
        <List>
          <InputItem>Username</InputItem>
          <WhiteSpace />
          <InputItem>Password</InputItem>
        </List>
        <Button type='primary'>Sign in</Button>
        <WhiteSpace />
        <Button onClick={this.register} type='primary'>Sign up</Button>
      </WingBlank>
    </div>)
  }
}
