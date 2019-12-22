import React, { lazy, Suspense, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'CSS/global.css';
// import aa from "pages/key word/KeyWord"
// import bb from "pages/test/test"
import './router-box-style.scoped.css';

export default function Router() {
   return (
      <div className='router'>
         <Suspense fallback={ <div>Loading...</div> }>
            { /* <Redirect to="/hook"/>*/ }
            <Switch>
               <Route
                  exact
                  path='/'
                  component={ lazy( () => import(/* webpackChunkName: "pages/KeyWord"*/ 'pages/key word/KeyWord' ) ) }
                  // component= {aa}
               />
            <Route
                  exact
                  path='/test'
                  component={ lazy( () => import(/* webpackChunkName: "pages/test"*/ 'pages/test/test' ) ) }
                  // component= {bb}
               />
            </Switch>
         </Suspense>
      </div>
   );
}

