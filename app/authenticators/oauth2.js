import Base from 'ember-simple-auth/authenticators/base';
import config from 'myapp/config/environment';

import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
export default class OAuth2Authenticator extends OAuth2PasswordGrantAuthenticator {
    serverTokenEndpoint = config.apiURL + 'token';
}
