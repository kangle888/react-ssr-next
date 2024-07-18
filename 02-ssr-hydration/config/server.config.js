let path = require("path");
const baseConfig =  require ("./base.config");
const  {merge} =  require( "webpack-merge");
let nodeExternals = require("webpack-node-externals");
module.exports =merge(baseConfig, {
  target: "node", // fs path
  entry: "./src/server/index.js",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  externals: [nodeExternals()],
});
