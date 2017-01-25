# Sample (React + Webpack) App + Examples

### What?
This is a repository with 5 practical examples from [this nice tutorial](http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/).

### Why?
I'm not really sure — maybe just to have my code hosted somewhere in the clouds?

### Where?
I managed to deploy it to Heroku with [this awesome guide](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html) so the result is all [there](https://reactive-5.herokuapp.com/).
Thanks, Heroku!

---

## Install
```bash
$ npm install -g babel babel-core webpack
$ npm install
```
You will also have to install some additional dependencies globally, be sure to read npm notifications well.

## Run
```bash
$ npm run dev
```
This will launch webpack and it will start a webpack-dev-server instance at http://localhost:3000 for you.

You may also run a nodejs-wrapped webpack server with
```bash
$ npm run start
```
This will start an Express server on http://localhost:3000 as well, but with nodejs-wrapper.
