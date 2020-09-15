'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

var ENV_CONFIG = require('./config/environment')(EmberApp.env());
var environment = ENV_CONFIG['environment'] || 'development';
console.log(`ember-cli-build.js: Building for env: ${environment}`);

module.exports = function(defaults) {
  const webpack = require('webpack');

  var config = {

    autoImport: {
      // https://github.com/ef4/ember-auto-import#customizing-build-behavior
      webpack: {
        // https://webpack.js.org/plugins/limit-chunk-count-plugin/
        plugins: [
          new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
        ]
      }
    },

    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: false
    },
    'sassOptions': {
      includePaths: [
        'vendor/sb-admin-2/scss',
      ]
    },
    'gzip': {
      enabled: false,
    },
    'emberCliConcat': {
      enabled: false,
    },
    'fingerprint': {
      enabled: false
    },
    'emberCliConcat': {
      // https://github.com/sir-dunxalot/ember-cli-concat/wiki/Options
      enabled: true,
      outputDir: 'assets',
      outputFileName: 'app',
      useSelfClosingTags: false,
      wrapScriptsInFunction: false,
      treeTypes: ['all'],
      js: {
        concat: false,
      },
      css: {
        concat: false,
      },
    }
  };

  if (environment != 'development') {
    config['gzip'] = { enabled: true, keepUncompressed: true };
    config['fingerprint'] = { enabled: true, extensions: ['js','css'] };
    config['emberCliConcat']['js'] = {
        concat: true,
        contentFor: 'concat-js',
        footer: null,
        header: null,
        preserveOriginal: false,
    };
    config['emberCliConcat']['css'] = {
        concat: true,
        contentFor: 'concat-css',
        footer: null,
        header: null,
        preserveOriginal: false,
    };
  };


  let app = new EmberApp(defaults, config);


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
