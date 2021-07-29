const CracoAntDesignPlugin = require("craco-antd");
const webpack = require('webpack');
const WebpackBar = require("webpackbar");
const CracoAlias = require("craco-alias");
module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ name: "Renderer", profile: true }),
      new webpack.DefinePlugin(
        (()=> {
          const defines = {}
          defines['$api'] = 'global.__$api'
          defines['$tools'] = 'global.__$tools'
          defines['$store'] = 'global.__$store'
          return defines
        })()
      ),
    ],
    configure: {
      target: 'electron-renderer'
    }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.alias.json"
      }
    },
  ],
};