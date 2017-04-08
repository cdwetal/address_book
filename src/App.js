var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Main = require('./Main');

ReactDOM.render(
	(
		<Router history={createBrowserHistory()}>
			<Route path="/" component={Main} />
    		</Router>
  	),
  	document.getElementById('main')
);
