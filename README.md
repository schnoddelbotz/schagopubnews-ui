# schagopubnews-ui
Serverless Cms, Headleass Application, (written in) GO, (to) PUBlish news!

# idea

- for given data model, ui emberjs-source-code is built using components
- emberjs build via cloudbuild on commit or so ... or locally
- deploy built ui to given bucket for serving purposes

## auth

- http://ember-simple-auth.com/
- https://emberigniter.com/implementing-authentication-with-ember-services/

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
