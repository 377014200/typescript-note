const chalk = require( 'chalk' );
const log = console.log;

class MyWebpackPlugin {

  constructor () {

    this.n = 0;

  }
  apply( compiler ) {

    compiler.hooks.compile.tap( 'MyWebpackPlugin', () => {

      // 做一些异步的事情……
      log( '[ 欲上青天揽明月 ]: --------------------第' + ++this.n + '次编译------------------' );
      log( '[ 欲上青天揽明月 ]: Project is running at ' + chalk.bold( 'http://localhost:9090/' ) );

    } );

  }

}

module.exports = MyWebpackPlugin;