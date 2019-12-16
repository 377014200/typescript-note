import React, { lazy, Suspense, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'CSS/global.css';

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
                  component={ lazy( () => import( /* webpackChunkName: "KeyWord"*/ 'pages/key word/KeyWord' ) ) }
               />
            </Switch>
         </Suspense>
      </div>
   );
}

