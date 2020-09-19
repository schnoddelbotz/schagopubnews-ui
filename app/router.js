import EmberRouter from '@ember/routing/router';
import config from 'myapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  apiURL = config.apiURL;
  version = config.version;
}

Router.map(function() {
  this.route('about');
  this.route('articles');
  this.route('article', function() {
    this.route('show', { path: '/show/:article_id' });
    this.route('edit', { path: '/edit/:article_id' });
    this.route('new');
  });
  this.route('dashboard');
  this.route('editions');
  this.route('login');
  this.route('users');
});
