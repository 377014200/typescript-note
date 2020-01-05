import { Component } from 'react';
import { BrowserRouter, Prompt } from 'react-router-dom';
import Router from '@/view/router/Router';
import Sidebar from '@/view/pages/sidebar/Sidebar';
import 'CSS/global.css';
import '@/assets/css/app-style.css';

function setConfirmation( message, callback ) {
   if ( window.location.pathname === '/router' ) {
      const allowTransition = window.confirm( message );

      callback( allowTransition );
      return;
   }
   callback( true );
}
export default class App extends Component {
   render() {
      return (
         <div className='container'>
            <h1> Hello ReactScript</h1>
            <h2>小生,我怕怕</h2>
            <BrowserRouter getUserConfirmation={ setConfirmation }>
               <Prompt message={ 'Are you sure to leave' } when />
               <Sidebar />
               <Router />
            </BrowserRouter>
         </div>
      );
   }
}