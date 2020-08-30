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