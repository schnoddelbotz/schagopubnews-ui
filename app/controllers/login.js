import Controller from '@ember/controller';
import {inject as service } from '@ember/service';
import {action } from '@ember/object';
import config from 'myapp/config/environment';
import firebase from 'firebase/app';
import { tracked } from '@glimmer/tracking';



export default class LoginController extends Controller {
    @service session;
    @service firebaseApp;

    // https://guides.emberjs.com/release/upgrading/current-edition/tracked-properties/
    // use @tracked instead of computed properties. no more this.set('foo'), just foo = ... !
    @tracked isLoading = false;

    @action
    async authenticate() {
        let { identification, password } = this;
        try {
            this.isLoading = true;
            await this.session.authenticate('authenticator:oauth2', identification, password);
            this.isLoading = false;
        } catch(reason) {
            this.isLoading = false;
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
    async authenticate() {
        const auth = await this.get('firebaseApp').auth();
        //const provider = new firebase.auth.GoogleAuthProvider();
        //const provider = new firebase.auth.EmailAuthProvider();
        var provider = new firebase.auth.OAuthProvider('google.com');
        provider.addScope('profile');
        provider.addScope('email');
        //return auth.signInWithPopup(provider);
        return auth.signInWithPopup(provider).then(function(result) {
            // This gives you the OAuth Access Token for that provider.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(`Login DATA: ${token}, ${user.displayName} (${user.email} -- verified:${user.emailVerified})`);
            console.log(user);
        });
    }
    */
}
