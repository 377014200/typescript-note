const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const { resolve } = require( './utils' );

module.exports = function ( NODE_ENV ) {
   const env_dev = require( '../config/dev.js' );
   const env_prod = require( '../config/prod.js' );
   const module = require( './webpack.loader.conf' );
   const devMode = NODE_ENV === 'development';

   console.log( devMode );
   const webpackBaseConfig = {
      context: resolve( './' ),
      entry: resolve( 'src/index.tsx' ),
      resolve: {
         // 尝试按顺序解析这些扩展。
         extensions: ['.js', 'jsx', '.ts', '.tsx'],
         alias: {
            '@': resolve( 'src' ),
            'CSS': resolve( 'src/assets/css' ),
            'IMG': resolve( 'src/assets/images' ),
            'JS': resolve( 'src/assets/javascript' ),
            'HOC': resolve( 'src/components/HOC' ),
            'pages': resolve( 'src/view/pages' ),
            'types': resolve( 'src/types' ),
         },
      },

      // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
      optimization: {
         runtimeChunk: 'single',
         removeEmptyChunks: true,
         splitChunks: {
            chunks: 'all',
            minSize: 1024,
            minChunks: 2,
            cacheGroups: {
               react: { // 使用了 filename 就不会走 output.chunkFilename;
                  name: '../vendors/react/react',
                  test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-redux|redux-logger|react-is|prop-types|mini-create-react-context|react-lifecycles-compat)[\\/]/,
                  // filename: `static/vendors/react/[name]${ devMode ? '' : '.[chunkhash]' }.js`,
                  priority: 10,
                  enforce: true,
               },
               tool: { // 使用了 filename 就不会走 output.chunkFilename;
                  name: '../vendors/tool',
                  test: /[\\/]node_modules[\\/].*\.js$/,
                  priority: 10,
                  // enforce: true,
               },
               antdJs: { // antd 是按需加载的, 不能用 filename; 下面的 antdCss 也是一样
                  // 这个 name 会走 output.chunkFilename
                  // eslint-disable-next-line no-shadow
                  name( module ) { // module.[resource:request:userRequest:rawRequest:]
                     const resource = String( module.resource || '' ).split( 'node_modules' )[1];
                     const filename = /@ant-design/.test( resource ) ? '@ant-design/@ant-design' : 'antd/antd';
                     // console.log( '[ init ] : in webpack.base.conf.js > 3', module.resource );
                     return '../vendors/' + filename;
                  },
                  test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/].*\.js$/,
                  priority: 10,
                  enforce: true,
               },
               antdCss: {
                  // 这个 name 走的是 mini-css-extract-plugin 的 chunkFilename;
                  name: function ( m ) {
                     // 这返回值看起来很奇怪这是怪不得已!
                     // console.log( "[ init ] : in webpack.base.conf.js > 1", String(  m.resource )  )
                     return '../vendors/antd/style/index';
                  },
                  test: /[\\/]node_modules[\\/]antd[\\/].*\.(le|c)ss$/,
                  enforce: true,
                  priority: 10,
               },
               // test: {
               //    name( m ) {
               //       console.log( '[ init ] : in webpack.base.conf.js > 1', m.resource );
               //       return 'aaa';
               //    },
               //    // enforce: true,
               //    priority: 5,
               //    test: /[\\/]node_modules[\\/].*\.js$/,
               // },
               //
               // defaultJs: {
               //    name: 'javascript/common',
               //    test: /\.js$/,
               // },
               // defaultCss: {
               //    name( m ) {
               //       if ( /n?ode_modules/.test( String( m.resource ) ) ) {
               //          // console.log( "[ init ] : in webpack.base.conf.js > 2", m )
               //          return 'aaa';
               //       }
               //       console.log( '[ init ] : in webpack.base.conf.js > 2', m.resource );
               //       return 'css/common';
               //    },
               //    test: /[\\/]src[\\/].*\.(le|c)ss$/,
               // },

            }
         }
      },

      plugins: [
         new webpack.DefinePlugin( devMode ? env_dev : env_prod ),
         new webpack.ProvidePlugin( {
            React: 'react',
            PropTypes: 'prop-types',
         } ),
      ],
      /*
             这些选项可以控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」。
        此功能受到 webpack 性能评估的启发
      */
      performance: {
         hints: 'warning',
         // 入口起点的最大体积 单位: b
         maxEntrypointSize: 31457280, // 30mb
         // 生成文件的最大体积 单位: b
         maxAssetSize: 3145728, // 3mb
         assetFilter: function( assetFilename ) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith( '.css' ) || assetFilename.endsWith( '.js' );
         }
      }, // performance end
      // 这是和控制台输出的信息有关的信息
      // stats: {
      //    // 这个属性暂时没用
      //    colors: {
      //       green: '\u001b[32m',
      //    },
      //    // 增加 child 的信息(false== 关闭)
      //    children: false,
      //    // 添加构建模块信息(false== 关闭)
      //    modules: false,
      //    // 显示警告/错误的依赖关系和来源(自webpack 2.5.0起)
      //    moduleTrace: true,
      //    cached: false,
      //    // 显示缓存的资产(将此设置为“false”只显示已发出的文件)
      //    cachedAssets: false,
      // }

   };
   return merge( webpackBaseConfig, module( NODE_ENV ) );
};