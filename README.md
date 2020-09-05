# schagopubnews-ui
Serverless Cms, Headleass Application, (written in) GO, (to) PUBlish news!

# idea

- for given data model, ui emberjs-source-code is built using components
- emberjs build via cloudbuild on commit or so ... or locally
- deploy built ui to given bucket for serving purposes

# todo?

- use CFN for initial auth, but then do all DB traffic directly against FireStore!
- read https://guides.emberjs.com/release/upgrading/current-edition/glimmer-components/


# done (, ... but)

- includes https://fontawesome.com/icons?d=gallery&s=regular,solid&m=free via https://github.com/FortAwesome/ember-fontawesome
- includes login via http://ember-simple-auth.com/
- includes https://startbootstrap.com/themes/sb-admin-2/ but not really working yet, as it includes jquery which I want to avoid missing parts mostly in https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/js/sb-admin-2.js ---> use https://www.ember-bootstrap.com/api/classes/Components.Collapse.html ?


## issues

- colors do not match 100% with original sb2...?

## auth

... against cfn. cfn has admin key in env; additional users from firestore collection USERS

- https://www.youtube.com/watch?v=e9LGVn0mnuk
- https://stackoverflow.com/questions/60843983/does-ember-octane-route-class-support-using-mixins

# setup done so far ...

```
./ember g route login
./ember g route application
./ember g controller login
./ember g controller application
./ember g authenticator oauth2
./ember g http-mock token
```
