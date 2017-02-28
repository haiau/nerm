//var React = require('react');
import React from 'react';
var ReactDOM = require('react-dom');
var Component = require('./Component.jsx');

var props = window.PROPS;

ReactDOM.render(
  React.createElement(Component, props), document
);
