const CracoAntDesignPlugin = require("craco-antd");
const WebpackBar = require("webpackbar");
const CracoAlias = require("craco-alias");
module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({name:"Renderer", profile: true }),
    ],
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
    }
  ],
};