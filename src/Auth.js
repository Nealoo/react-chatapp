import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from './Auth.redux.js';

@connect(
  state=>({isLogin: state.auth.isAuth}),
  {login}
)
export default class Auth extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const app = (
      <div>
        <h2>Auth page</h2>
        <button onClick={this.props.login}>Sign in</button>
      </div>
    );
    const redirectToDashboard = <Redirect to='/dashboard' />
    return this.props.isLogin?redirectToDashboard:app;
  }
}
