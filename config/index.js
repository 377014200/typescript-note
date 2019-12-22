module.exports = function ( NODE_ENV ) {
   const { resolve } = require( 'path' );

   return {

      development: {
         NODE_ENV,
         output: {
            path: 'dist',
            publicPath: '/',
         },
         devServer: {
            contentBase: resolve( __dirname, '../public' ),
            // index: resolve('./public/index.html'),
            port: '9090',
            host: '0.0.0.0',
            hot: true,
            // hotOnly: false,
            // 告诉开发服务器查看由开发服务器提供的文件。contentBase选项。默认情况下是禁用的。启用时，文件更改将触发重新加载整个页面。
            watchContentBase: true,
            clientLogLevel: 'silent',
            historyApiFallback: {
               index: '/'
            },
            // 当存在编译器错误或警告时，在浏览器中显示全屏覆盖。如果只想显示编译器错误:
            overlay: false
         },

      },

      production: {
         NODE_ENV,
         output: {
            path: 'dist',
            publicPath: '/',
         },
      }

   }[NODE_ENV || 'development'];
};