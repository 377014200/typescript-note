import "core-js/modules/es.promise";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux';

import App from './view/App';
const render = function ( Component ) {
   const RootApp = (
      <Provider store={ store }>
         <Component />
      </Provider>
   );

   ReactDOM.render( RootApp, document.getElementById( 'root' ) );
};


render( App );

// @ts-ignore
if ( module.hot ) {
   // @ts-ignore
   module.hot.accept( './view/App', () => {
      console.log( '[ 欲上青天揽明月 ] : Accepting the updated in react!' );
      render( App );
   } );
}