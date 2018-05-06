import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login, getUserData} from './Auth.redux.js';
import axios from 'axios';

@connect(
  state=>state.auth,
  {login, getUserData}
)
export default class Auth extends React.Component{
  // componentDidMount(){
  //   axios.get('/data').then(res=>{
  //     if(res.status == 200){
  //       this.setState({data:res.data});
  //       console.log(this.state.data);
  //     }
  //   });
  // }

  componentDidMount(){
    this.props.getUserData();
  }
  render(){

    const app = (
      <div>
        <h2>Auth page</h2>
        <span>{this.props.user}:<b>{this.props.age}</b></span>
        <button onClick={this.props.login}>Sign in</button>
      </div>
    );
    const redirectToDashboard = <Redirect to='/dashboard' />
    return this.props.isAuth?redirectToDashboard:app;
  }
}
