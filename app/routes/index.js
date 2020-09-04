import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  // GET / always redirects to to GET /dashboard (which requires auth, and redirects to login itself, if needed)
  beforeModel() {
    this.transitionTo('dashboard');
  }
}
