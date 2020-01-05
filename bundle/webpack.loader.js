
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { resolve } = require( './utils' );
const loaderConfig = function ( NODE_ENV ) {
   const devMode = NODE_ENV === 'development';

   return {
      module: {
         rules: [
            // js
            {
               test: /\.(j|t)sx?$/,
               exclude: /node_modules/,
               use: [
                  'cache-loader',
                  {
                     loader: 'babel-loader',
                     options: {
                        cacheDirectory: true,
                     }
                  }
               ],
            },
            { // 所有输出”.js'的文件将有任何源代码重新处理的源代码地图加载器'。
               enforce: 'pre',
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'source-map-loader'
            },
            // css
            {
               test: /\.css$/,
               // "scoped-css-loader" 然 react 也可已使用 scoped 的样式 :
               // 地址: http://npm.taobao.org/package/scoped-css-loader
               use: [
                  devMode ? 'style-loader' : {
                     loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                     options: {
                        hmr: devMode,
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                     }
                  },
                  'css-loader',
                  'scoped-css-loader'
               ]

            },
            // less
            {
               test: /\.less$/,
               use: [
                  devMode ? 'style-loader' : {
                     loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                     options: {
                        hmr: devMode,
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                     }
                  },
                  {
                     loader: 'css-loader', // translates CSS into CommonJS
                     options: {
                        sourceMap: true,
                        importLoaders: 2
                     }
                  },
                  {
                     loader: 'scoped-css-loader',
                  },
                  {
                     loader: 'less-loader', // compiles Less to CSS
                     options: {
                        javascriptEnabled: true, // 此选项开启是为了防止 antd 报错! 参考 https://github.com/ant-design/ant-motion/issues/44
                        // paths: [path.resolve( __dirname, 'node_modules' )],
                        sourceMap: true,
                     }
                  },
               ],
            },
            {
               test: /\.(svg)(\?.*)?$/,
               use: [
                  {
                     loader: 'file-loader',
                     options: {
                        name: '[path][name]' + ( devMode ? '.[ext]' : '.[hash].[ext]' ),
                     }
                  }
               ]
            },
            // images
            {
               test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
               use: [
                  {
                     loader: 'url-loader',
                     options: {
                        name: '[path][name]' + ( devMode ? '.[ext]' : '.[hash].[ext]' ),
                        limit: 20480,
                        fallback: 'file-loader',
                     }
                  }
               ]
            },
         ]
      }
   };
};

module.exports = loaderConfig;


