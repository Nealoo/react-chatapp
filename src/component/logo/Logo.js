import React from 'react';
import logoSrc from './logo.png';
import './logo.css';

export default class Logo extends React.Component{

  render(){
    return (
      <div className='logo-container'>
        <img src={logoSrc} alt='logo'/>
      </div>
    )
  }
}
