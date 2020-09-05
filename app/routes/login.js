import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
	@service session;

	activate() {
		document.title = "SPN - Login";
    	if (this.session.isAuthenticated) {
    		// the case where http://localhost:4200/#/login is bookmarked ... and we would be stuck there.
    		this.transitionTo('dashboard');
    	}
	}
}
