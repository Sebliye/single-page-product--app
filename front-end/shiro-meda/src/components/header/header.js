import React from 'react';
import Radium from 'radium';
//import styled from 'styled-components';
class Header extends React.Component{
render(){
const ShiromedaStyle={
     color:'red',
     fontSize:'xx-large'
}
const signupstype={
     marginLeft:"40em",
}
      return(
       <header>
        <ul className="nav">
          <li style={ShiromedaStyle}><a>Shiro Meda</a></li>
          <li><a>Add</a></li>
          <li style={signupstype}><a>signup</a></li>
          <li><a>SignIn</a></li>
        </ul>
      </header>
    
     )
}    
}
export default Radium(Header);