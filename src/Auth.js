import React from 'react';
import {connect} from 'react-redux';

@connect(
  state=>state
)
export default class Auth extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h2>Auth page</h2>
  }
}
