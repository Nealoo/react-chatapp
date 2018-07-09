import React from 'react';
import Logo from '../../component/logo/Logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/user.redux';

@connect(
  state=>state.user,
  {login}
)
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: '',
      pwd: ''
    };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }

  handleLogin(){
    this.props.login(this.state);
  }

  register() {
    this.props.history.push('/register');
  }
  render(){
    return (<React.Fragment>
      {this.props.redirectTo? <Redirect to={this.props.redirectTo} /> : null}
      <Logo />
      <h1>Login page</h1>
      {this.props.msg}
      <WingBlank>
        <List>
          <InputItem onChange={v=>this.handleChange('user',v)}>Username</InputItem>
          <WhiteSpace />
          <InputItem onChange={v=>this.handleChange('pwd',v)}>Password</InputItem>
        </List>
        <Button onClick={this.handleLogin} type='primary'>Sign in</Button>
        <WhiteSpace />
        <Button onClick={this.register} type='primary'>Sign up</Button>
      </WingBlank>
    </React.Fragment>)
  }
}
