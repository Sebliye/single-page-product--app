import React from 'react';
import Radium from 'radium';
//import styled from 'styled-components';
//import './App.css';
const Header=(props)=> {

const ShiromedaStyle={
     color:'red',
     fontSize:'xx-large',
     top:0
}
const signupstype={
     marginLeft:"50em",
}
     return(
      <header>
        <ul className="nav">
          <li style={ShiromedaStyle}><a href="/"><strong style={{backgroundColor:'red',color:'white'}}>SHIRO MEDA</strong></a></li>
          <li style={signupstype}><a href='/'>signup</a></li>
          <li><a href="/">SignIn</a></li>
          <li><a href='/'>Add</a></li>
        </ul>
      </header>
     )
}
export default Radium(Header);