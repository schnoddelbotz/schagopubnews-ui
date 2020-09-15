import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
//import firebase from 'firebase/app';

export default class ApplicationRoute extends Route /*.extend(ApplicationRouteMixin)*/ {
	@service session;
	beforeModel(transition) {
		// redirect to /#/login if no API token set yet
		this.session.requireAuthentication(transition, 'login');
	}

}
