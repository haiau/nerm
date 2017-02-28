var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('../Component.jsx');
var ReactRouter = require('react-router');

router.get('*', function(req, res) {
  var props = {title : 'Universal React'};
  ReactRouter.match({
    routes: (
      <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path='/' component={require('../Component.jsx')}>
        </ReactRouter.Route>
      </ReactRouter.Router>
    ),
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (renderProps) {
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement = {
            function(Component, renderProps) {
              return <Component {...renderProps} {...props} />
            }
          }
        />
      );
      res.send(html);
    } else {
      res.status(404).send('Not Found!');
    }
  }); //function
}); //get

module.exports = router;
