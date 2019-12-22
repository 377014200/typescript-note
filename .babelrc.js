module.exports = {
  "presets": [
     [
        "@babel/preset-env",
        {
           "useBuiltIns": "usage",
           "targets": "> 0.25%, last 2 versions, not ie <= 9",
           "corejs": 2
        }
     ],
     "@babel/preset-react",
     "@babel/preset-typescript"
  ],
  "plugins": [
     [
        "@babel/plugin-transform-runtime",
        {
           "corejs": 2,
           "regenerator": true
        }
     ],
    "babel-plugin-react-scoped-css",
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-proposal-decorators", {
         "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties", {
         "loose": true
      }
    ],
     ["import",   {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true   // `style: true` 会加载 less 文件
         }
     ],
  ]
};