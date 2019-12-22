import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';

import './sidebar-style.scoped.css';

export default class Sidebar extends Component {
   render() {
      return (
         <div className='sidebar'>
            <ul>
               <li><NavLink exact to='/' activeClassName='route-active' > 关键字 </NavLink></li>
               <li><NavLink exact to='/test' activeClassName='route-active' > test </NavLink></li>
            </ul>
         </div>
      );
   }
}