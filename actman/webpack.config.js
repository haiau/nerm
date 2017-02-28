/*
var path = require('path');
module.exports = {
  entry:  './client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  }
};
*/

var path = require('path');
var webpack = require('webpack');
module.exports = {
  // click on the name of the option to get to the detailed documentation
  // click on the items with arrows to show more examples / advanced options

  entry: "./client.js", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "public"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "bundle.js", // string
    // the filename template for entry chunks

    // the url to the output directory resolved relative to the HTML page
    //publicPath: "/assets/", // string

    //library: "MyLibrary", // string,
    // the name of the exported library

    // the type of the exported library
    //libraryTarget: "umd", // universal module definition

    /* Advanced output configuration (click to show) */
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        options: {
          //presets: ["es2015"]
          presets: ["react"]
        },
        // options for the loader
      }
    ]
    /* Advanced module configuration (click to show) */
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used

    alias: {
      // a list of module name aliases

      "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // modules aliases are imported relative to the current context
    },
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  //externals: ["react"],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed

  devServer: {
    /* TODO */
  },

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
}
