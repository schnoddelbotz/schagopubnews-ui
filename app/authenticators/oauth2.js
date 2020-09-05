import Base from 'ember-simple-auth/authenticators/base';
// import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
export default class OAuth2Authenticator extends OAuth2PasswordGrantAuthenticator {
  serverTokenEndpoint = '/spn/token';
}