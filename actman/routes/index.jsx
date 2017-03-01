var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

router.get('*', function(req, res) {
  var props = {title : 'Universal React'};

  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (renderProps) {
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement = {
            function(Component, renderProps) {
              return <Component {...renderProps} custom={props} />
            }
          }
        />
      );
      res.send(html);
    } else {
      res.status(404).send('Not Found!');
    }
  }); //match
}); //get

module.exports = router;
