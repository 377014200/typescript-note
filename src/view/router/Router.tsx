import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'CSS/global.css';
import './router-box-style.scoped.css';

export default function Router() {
   return (
      <div className='view'>
         <Suspense fallback={ <div>Loading...</div> }>
            { /* <Redirect to="/hook"/>*/ }
            <Switch>
               <Route
                  exact
                  path='/'
                  component={ lazy( () => import( /* webpackChunkName: "pages/KeyWord"*/ 'pages/key word/KeyWord' ) ) }
                  // component= {aa}
               />
               <Route
                  exact
                  path='/test'
                  component={ lazy( () => import( /* webpackChunkName: "pages/test"*/ 'pages/test/test' ) ) }
               />
            </Switch>
         </Suspense>
      </div>
   );
}

