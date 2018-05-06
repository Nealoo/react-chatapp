import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import App from './App';
import {connect} from 'react-redux';
import { logout } from './Auth.redux';

class Test extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <h3>test component</h3>
  }
}

@connect(
  state=>({isLogin:state.auth.isAuth}),
  {logout}
)
export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const url = this.props.match.url;
    const app = (
      <div>
        <button onClick={this.props.logout}>Log out</button>
        <ul>
          <li>
            <Link to={`${url}`}>App</Link>
          </li>
          <li>
            <Link to={`${url}/test`}>Test</Link>
          </li>
        </ul>
        <Route path='/dashboard' exact component={App}></Route>
        <Route path='/dashboard/test' component={Test}></Route>
      </div>
    );
    return this.props.isLogin?app:redirectToLogin;
  }
}
