import React from 'react';
import Logo from '../../component/logo/Logo';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';

export default class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user:'',
      pwd:'',
      repeatpwd: '',
      type: 'genuis',
    }
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(key, val){
    this.setState({
      [key]: val
    });
  }

  handleRegister(){
    console.log(this.state);
  }

  render(){
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <h1>Register page</h1>
        <List>
          <InputItem onChange={v=>this.handleChange('user', v)}>Username</InputItem>
          <InputItem type='password' onChange={v=>this.handleChange('pwd', v)}>Password</InputItem>
          <InputItem type='password' onChange={v=>this.handleChange('repeatpwd', v)}>Re Password</InputItem>
          <RadioItem onChange={()=>this.handleChange('type', 'genuis')} checked={this.state.type=='genuis'}>Genuis</RadioItem>
          <RadioItem onChange={()=>this.handleChange('repeatpwd', 'boss')} checked={this.state.type=='boss'}>Boss</RadioItem>
          <Button onClick={this.handleRegister} type='primary'>Register</Button>
        </List>
      </div>
    )
  }
}
