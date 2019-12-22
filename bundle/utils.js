const path = require( 'path' );

module.exports = {
   resolve: function ( dir ) {
      // eslint-disable-next-line prefer-rest-params
      const arg = arguments;

      return arg.length >= 2 ? path.resolve( __dirname, '..', ...arg ) : path.resolve( __dirname, '..', dir );
   },
   join: path.join,

   catalog: path.resolve
};