const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const { resolve } = require( './utils' );
const manifest = require( '../react-manifest.json' );

module.exports = function ( NODE_ENV ) {
   const env_dev = require( '../config/dev.js' );
   const env_prod = require( '../config/prod.js' );
   const module = require( './webpack.loader.conf' );
   const devMode = NODE_ENV === 'development';

   console.log( devMode );
   const webpackBaseConfig = {
      context: resolve( './' ),

      entry: {
         app: resolve( 'src/index.tsx' ),
      },
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
            minSize: 102400,
            // name: "aaa",
            minChunks: 2,
            cacheGroups: {
               react: {
                  name: 'react',
                  test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                  filename: `static/vendors/react/[name]${ devMode ? '' : '.[chunkhash]' }.js`,
                  priority: 10,
                  enforce: true,
               },
               antdAsync: {
                  // eslint-disable-next-line no-shadow
                  name( module, chunks, cacheGroupKey ) { // module.[resource:request:userRequest:rawRequest:]
                     let filename;
                     const resource = String( module.resource || '' ).split( 'node_modules' )[1];
                     const reg = /@ant-design/;

                     // eslint-disable-next-line prefer-const
                     filename = reg.test( resource ) ? '@ant-design/@ant-design' : 'antd/antd';
                     return 'vendors/' + filename;
                  },
                  test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
                  // filename: `static/vendors/antd/[name]${ devMode ? '' : '.[chunkhash]' }.js`,
                  priority: 10,
                  enforce: true,
                  chunks: 'all'
               },
               default: {
                  name: 'javascript/common',
               }
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
      stats: {
         // 这个属性暂时没用
         colors: {
            green: '\u001b[32m',
         },
         // 增加 child 的信息(false== 关闭)
         children: false,
         // 添加构建模块信息(false== 关闭)
         modules: false,
         // 显示警告/错误的依赖关系和来源(自webpack 2.5.0起)
         moduleTrace: true,
         cached: false,
         // 显示缓存的资产(将此设置为“false”只显示已发出的文件)
         cachedAssets: false,
      }

   };
   return merge( webpackBaseConfig, module( NODE_ENV ) );
};