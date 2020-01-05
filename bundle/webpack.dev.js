process.env.NODE_ENV = 'development';
const merge = require( 'webpack-merge' );
const webpackBaseConfig = require( './webpack.base' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );
const MyWebpackPlugin = require( './plugin/MyWebpackPlugin' );
const { resolve } = require( './utils' );
const ENV_CONFIG = require( '../config' )( process.env.NODE_ENV );
const { publicPath, path } = ENV_CONFIG.output;

const developmentConfig = {

   mode: 'development',
   output: {
      filename: 'static/javascript/[name].js',
      path: resolve( path ),
      publicPath,
      chunkFilename: 'static/javascript/[name].bundle.js',
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: ENV_CONFIG.devServer,
   plugins: [
      // 开发环境下其实没有用到这个plugin ,开发环境下并没有拆分 css 代码
      // new MiniCssExtractPlugin( {
      //    filename: 'static/css/[name].css',
      //    chunkFilename: 'static/[name].css'
      // } ),
      new MyWebpackPlugin(),
      new HtmlWebpackPlugin( { template: resolve( 'public/index.html' ) } ),
      new ForkTsCheckerWebpackPlugin( {
         eslint: false,
         tsconfig: resolve( './tsconfig.json' ),
         ignoreDiagnostics: [], //要忽略的typescript诊断代码列表。
      } )
   ],
};

module.exports = merge( developmentConfig, webpackBaseConfig( process.env.NODE_ENV ) );