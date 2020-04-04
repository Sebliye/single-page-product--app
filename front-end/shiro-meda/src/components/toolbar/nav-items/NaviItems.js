import React,{ Component } from 'react'
import NavItem from './navitem/NavItem';

class NavItems extends Component{
    render(){
       return (  <ul>
              <NavItem>LogIn</NavItem>
              <NavItem>Log out</NavItem>
              <NavItem>.....</NavItem>
         </ul>
         );
    }
}

export default NavItems;
