var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

var About = require('./about');
var TodoComponent = require('./toDoComponent');
require('./css/index.css');

var App = CreateReactClass({    
    render: function() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to={'/about'}>About</Link>
                        &nbsp;&nbsp;
                        <Link to={'/'}>To Do</Link>
                    </nav>
                    <Route exact path="/" component={TodoComponent}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('todo_wrapper'));