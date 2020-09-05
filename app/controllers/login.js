import Controller from '@ember/controller';
import {inject as service } from '@ember/service';
import {action } from '@ember/object';

export default class LoginController extends Controller {
    @service session;

    @action
    authenticate() {
        let {identification, password } = this.getProperties('identification', 'password');
        this.session.authenticate('authenticator:oauth2', identification, password).catch((reason) => {

            // no jQuery is ok, but how to more nicely...
            document.getElementById("loginContainer").classList.add("shaky");
            setTimeout(function(){ document.getElementById("loginContainer").classList.remove("shaky"); }, 1000);

            // set this.errorMessage if something went wrong, so user gets feedback about error
            if (reason.responseJSON && "error" in reason.responseJSON) {
                this.set('errorMessage', reason.responseJSON.error);
            } else {
                this.set('errorMessage', reason);
            }
        });
        this.transitionToRoute('dashboard'); // ??? still? runs? when?
    }
}
