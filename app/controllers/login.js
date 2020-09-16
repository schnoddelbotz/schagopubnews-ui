import Controller from '@ember/controller';
import {inject as service } from '@ember/service';
import {action } from '@ember/object';
import config from 'myapp/config/environment';


export default class LoginController extends Controller {
    @service session;

    @action
    async authenticate() {
        let { identification, password } = this;
        try {
          await this.session.authenticate('authenticator:oauth2', identification, password);
        } catch(reason) {
            document.getElementById("loginContainer").classList.add("shaky");
            setTimeout(function(){
                let el=document.getElementById("loginContainer");
                if (el) {
                    el.classList.remove("shaky");
                }
            }, 1000);
            if (reason.responseJSON && "error" in reason.responseJSON) {
                this.set('errorMessage', reason.responseJSON.error);
            }
            else if ("status" in reason && "statusText" in reason) {
                this.set('errorMessage', `${reason.status} ${reason.statusText}`);
            }
            else {
                this.set('errorMessage', reason);
            }
        }
        if (this.session.isAuthenticated) {
          this.transitionToRoute('dashboard');
        }
    }

    /*
    @action
    authenticate() {
        console.log(`Authenticating against apiURL ${config.apiURL}`);
        let {identification, password } = this.getProperties('identification', 'password');
        // https://github.com/firebase/emberfire/issues/579#issuecomment-501888016
        // const auth = this.get('firebaseApp').auth();
        // const provider = new firebase.auth.GoogleAuthProvider();
        // return auth.then(auth => auth.signInWithPopup(provider));
        ...
    */
}
