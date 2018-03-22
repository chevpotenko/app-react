var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

const App = require('./containers/app');

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('todo_wrapper'));