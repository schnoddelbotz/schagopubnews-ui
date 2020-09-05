'use strict';

module.exports = function(app) {
  const express = require('express');
  let tokenRouter = express.Router();

  tokenRouter.post('/', function(req, res) {
    console.log(req.body);
    if (req.body.grant_type === 'password') {
      if (req.body.username === 'letme' && req.body.password === 'in') {
        res.status(200).send('{"access_token": "secret token"}');
      } else {
        res.status(401).send('{"error": "invalid grant"}');
      }
    } else {
      res.status(400).send('{"error": "unsupported grant_type"}');
    }
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/token', require('body-parser').json());
  //app.use('/api/token', tokenRouter);
  const bodyParser  = require('body-parser');
  app.use('/SPN/token', bodyParser.urlencoded({ extended: true }), tokenRouter);
};
