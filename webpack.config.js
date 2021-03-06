const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const MyWebpackPlugin = require( './bundle/plugin/MyWebpackPlugin' );
const webpack = require( 'webpack' );
const devMode = true;

function customErrorFormatter( error, colors ) {
   const messageColor = error.severity === 'warning' ? colors.bold.yellow : colors.bold.red;

   return (
      'TS Error.... ' +
    messageColor( JSON.stringify( error, null, 4 ) )
   );
}
module.exports = {

   mode: 'development',

   entry: {
      app: ['react-hot-loader/patch', path.join( __dirname, './src' )] // app.js作为打包的入口
      // app: './src'
   },
   // 输出目录
   output: {
      filename: '[name].js',
      path: path.join( __dirname, './dist' ), // 打包好之后的输出路径
      publicPath: '/' // 静态资源文件引用时的路径（加在引用静态资源前面的）
   },

   devtool: 'cheap-module-eval-source-map',
   devServer: {
      contentBase: path.resolve( __dirname, './public' ),
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

   module: {
      rules: [
      // js
         {
            test: /.js(x)?$/,
            include: /node_madules[\\/]react-syntax-highlighter|src/,
            loader: 'babel-loader'
         },
         // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
         {
            test: /(\.d)?\.ts(x)?$/,
            exclude: /node_modules/,
            use: [
               'babel-loader',
               {
                  loader: 'ts-loader',
                  options: {
                     errorFormatter: customErrorFormatter,
                     ignoreDiagnostics: [] // 忽略某些错误描述
                  }
               }
            ]
         },
         { // 所有输出”.js'的文件将有任何源代码重新处理的源代码地图加载器'。
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
         },
         // css
         {
            test: /.css$/,
            // "scoped-css-loader" 然 react 也可已使用 scoped 的样式 :
            // 地址: http://npm.taobao.org/package/scoped-css-loader
            use: ['style-loader', 'css-loader', 'scoped-css-loader']

         },
          // less
          {
              test: /\.less$/,
              loaders : [
                  {
                      loader: 'css-loader',
                      options: {
                          sourceMap: false,
                          importLoaders: 2,
                          modules: true,
                      }
                  },
                  /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
                  {
                      loader: 'postcss-loader',
                      options: {
                          sourceMap: false
                      }
                  },
                  /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
                  {
                      loader: 'less-loader',
                      options: {
                          sourceMap: false
                      }
                  }
              ]
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
   },

   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin( {
         template: path.join( __dirname, 'public/index.html' )
      } ),
      new webpack.ProvidePlugin( {
         React: 'react',
         PropTypes: 'prop-types',
         s: [path.resolve( __dirname, 'src/types/alias.d.ts' ), 's'],

      } ),
      new MyWebpackPlugin(),
   ],

   resolve: {
      aliasFields: ['browser'],
      // 尝试按顺序解析这些扩展。
      extensions: ['.d.ts', '.ts', '.tsx', '.jsx', '.js', '.json'],
      alias: {
         '@': path.resolve( __dirname, 'src' ),
         'CSS': path.resolve( __dirname, 'src/assets/css' ),
         'IMG': path.resolve( __dirname, 'src/assets/images' ),
         'JS': path.resolve( __dirname, 'src/assets/javascript' ),
         'view': path.resolve( __dirname, 'src/view' ),
         'components': path.resolve( __dirname, 'src/components' ),
         'router': path.resolve( __dirname, 'src/router' ),
         'store': path.resolve( __dirname, 'src/store' ),
         'assets': path.resolve( __dirname, 'src/assets' ),
         'HOC': path.resolve( __dirname, 'src/components/HOC' ),
         'config': path.resolve( __dirname, 'src/config' ),
         'pages': path.resolve( __dirname, 'src/view/pages' ),
         'react-hot-loader': path.resolve( path.join( __dirname, './node_modules/react-hot-loader' ) ),
         // add these 2 lines below so linked package will reference the patched version of `react` and `react-dom`
         'react': path.resolve( path.join( __dirname, './node_modules/react' ) ),
         'react-dom': path.resolve( path.join( __dirname, './node_modules/react-dom' ) ),
      // or point react-dom above to './node_modules/@hot-loader/react-dom' if you are using it
      }
   },
   // externals: {
   //    react: { root: 'React' },
   //    'react-dom' :{ root: 'ReactDOM' }
   // }

};