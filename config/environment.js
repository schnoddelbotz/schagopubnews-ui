'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'myapp',
    environment,
    rootURL: '/SPN/',
    apiURL: '/SPN/', // by default, assume own CFn / Webserver -> one origin.
    // app can also be served off bucket (?) ... and POINT TO correct api url for auth
    // both rootURL and apiURL can be given at spn invocation, it will adjust index.html
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // FIRESTORE stuff below
    contentSecurityPolicy: {
      'script-src': '\'self\' \'unsafe-eval\'',
      'style-src': '\'self\' \'unsafe-inline\'',
      'font-src': '\'self\'',
      'frame-src': '\'self\' https://*.firebaseapp.com',
      'img-src': '\'self\'',
      'connect-src': '\'self\' wss://*.firebaseio.com https://*.googleapis.com'
    },

    firebase: [
      {
        apiKey: "AIzaSyAWIMkDzUu4b0nD60BrglQX5Sq0_8hnT5Y",
        authDomain: "ember-test-69699.firebaseapp.com",
        databaseURL: "https://ember-test-69699.firebaseio.com",
        projectId: "ember-test-69699",
        storageBucket: "ember-test-69699.appspot.com",
        messagingSenderId: "39112982274",
        appId: "1:39112982274:web:acf53ad9e778bfd079cc1b",
        measurementId: "G-YRDCZ1HFCQ"
      }, {
        apiKey: "AIzaSyAWIMkDzUu4b0nD60BrglQX5Sq0_8hnT5Y",
        authDomain: "ember-test-69699.firebaseapp.com",
        databaseURL: "https://ember-test-69699.firebaseio.com",
        projectId: "ember-test-69699",
        storageBucket: "ember-test-69699.appspot.com",
        messagingSenderId: "39112982274",
        appId: "1:39112982274:web:acf53ad9e778bfd079cc1b",
        measurementId: "G-YRDCZ1HFCQ",
        name: "second-app"
      }
    ],

    firestore: {
      enablePersistence: true
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
