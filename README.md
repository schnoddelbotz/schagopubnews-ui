# schagopubnews-ui
Serverless Cms, Headleass Application, (written in) GO, (to) PUBlish news!

# idea

- for given data model, ui emberjs-source-code is built using components
- emberjs build via cloudbuild on commit or so ... or locally
- deploy built ui to given bucket for serving purposes

# todo?

- use CFN for initial auth, but then do all DB traffic directly against FireStore!
- read https://guides.emberjs.com/release/upgrading/current-edition/glimmer-components/
- https://github.com/kaliber5/ember-cli-bundle-analyzer
- https://emberobserver.com/addons/ember-keyboard -- ctrl-f --> focus search field? goto articles. dashboard.

# done (, ... but)

- includes https://fontawesome.com/icons?d=gallery&s=regular,solid&m=free via https://github.com/FortAwesome/ember-fontawesome
- includes login via http://ember-simple-auth.com/
- includes https://startbootstrap.com/themes/sb-admin-2/ but not really working yet, as it includes jquery which I want to avoid missing parts mostly in https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/js/sb-admin-2.js ---> use https://www.ember-bootstrap.com/api/classes/Components.Collapse.html ?


## issues

- colors do not match 100% with original sb2...?

## auth

- https://firebase.google.com/docs/reference/js/ -> auth

... against cfn. cfn has admin key in env; additional users from firestore collection USERS

- https://www.youtube.com/watch?v=e9LGVn0mnuk
- https://stackoverflow.com/questions/60843983/does-ember-octane-route-class-support-using-mixins

- https://auth0.com/blog/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/#Creating-a-simple-app-that-uses-JWT
- https://github.com/simplabs/ember-simple-auth/blob/411c19e2639b1d4c9776647675dd539b1ab788ee/guides/upgrade-to-v3.md

- fun ahead: https://github.com/firebase/emberfire/issues/614

# setup done so far ...

```
./ember g route login
./ember g route application
./ember g controller login
./ember g controller application
./ember g authenticator oauth2
./ember g http-mock token
```

# taglines

- SPN. Simply produce news.
- SPN. Share personal notes.
- SPN. Inherently cloud-native.
- x4E. Experience for Enterprises.
- x4E. Exceptional for Everything.
- x4E. Experts for Efficency.
- x4E. Example for engineering excellence.
- x4E. The definition of cloud-native.
