import React from 'react';
import Logo from '../../component/logo/Logo';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';

export default class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'genuis',
    }
  }

  render(){
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <h1>Register page</h1>
        <List>
          <InputItem>Username</InputItem>
          <InputItem>Password</InputItem>
          <InputItem>Re Password</InputItem>
          <RadioItem checked={this.state.type=='genuis'}>Genuis</RadioItem>
          <RadioItem checked={this.state.type=='boss'}>Boss</RadioItem>
        </List>
      </div>
    )
  }
}
