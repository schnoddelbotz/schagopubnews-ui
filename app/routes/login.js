import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
	@service session;

	model() {
    	if (this.session.isAuthenticated) {
    		this.transitionTo('dashboard');
    	}
  	}
}
