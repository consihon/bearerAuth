![CF](http://i.imgur.com/7v5ASc8.png) LAB 13
==============================================

This lab is to demonstrate our knowledge of turning tokens into single-use, expirable after a certain time, and permanent keys.

## LAB 13
[![Build Status](https://travis-ci.org/consihon/bearerAuth.svg?branch=master)](https://travis-ci.org/consihon/bearerAuth)

### Author: Connor Sihon, Erik Johnson, Rick Bellamy

* [Repo](https://github.com/consihon/bearerAuth)
* [Travis](https://travis-ci.org/consihon/bearerAuth)
* [Heroku](https://dashboard.heroku.com/apps/bauthn-12/deploy/github)

### Modules

#### app.js

* server -> has all server paths
* start -> starts server
___
#### router.js

* `post('/signup')` -> creates new user for mongoose
* `post('/signin')` -> signs into user
* `get('/oauth')` -> requests token and then sends it to provider
* `post('/key')` -> creates a reusable token
___
#### users-model.js

* `users` -> stores user information

___
#### middleware.js

* authentication -> authenticates tokens

#### Tests
To run test, use `npm run test`
