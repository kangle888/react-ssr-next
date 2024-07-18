let path = require("path");
const baseConfig =  require ("./base.config");

const {merge} =  require( "webpack-merge");

module.exports = merge(baseConfig, {
  target: "web", // fs path
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "../build/client"),
  }
});
