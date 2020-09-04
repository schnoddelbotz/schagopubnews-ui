import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {

	@service session;

	beforeModel(transition) {
		// redirect to /#/login if no API token set yet
		this.session.requireAuthentication(transition, 'login');
	}

}
