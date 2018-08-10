$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

React.render(<Home/>,document.getElementById('app'));
