import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
	@service session;

	@action
    authenticate() {
        let { identification, password } = this.getProperties('identification','password');
        this.session.authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        	// fixme: ensure error in reson ... catch other/net errors
        	this.set('errorMessage', reason.responseJSON.error);
        });
    }
}
