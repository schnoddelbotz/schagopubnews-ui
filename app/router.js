import EmberRouter from '@ember/routing/router';
import config from 'myapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  apiURL = config.apiURL;
  version = config.version;
}

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('about');
  this.route('users');
  this.route('articles');
});
