import React from 'react';
import {Link, Route} from 'react-router-dom';
import App from './App';

class Test extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <h3>test component</h3>
  }
}

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            <Link to='/dashboard'>App</Link>
          </li>
          <li>
            <Link to='/dashboard/test'>Test</Link>
          </li>
        </ul>
        <Route path='/dashboard' exact component={App}></Route>
        <Route path='/dashboard/test' component={Test}></Route>
      </div>
    )
  }
}
