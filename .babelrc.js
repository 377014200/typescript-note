module.exports = {
  "presets": ["@babel/preset-react"],
  "plugins": [
      ["import", {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": true   // `style: true` 会加载 less 文件
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
    "react-hot-loader/babel",

  ]
};