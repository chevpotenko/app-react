var React = require('react');
var CreateReactClass = require('create-react-class');
var connect = require('react-redux').connect;

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { addItem } from '../actions/todoAction';
import { deleteItem } from '../actions/todoAction';

var ToDoComponent = require('../components/toDoComponent');
var About = require('../components/about');

require('../css/index.css');

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
                    <Route exact path="/" render={
                            () => <ToDoComponent todos={this.props.todos}
                                                onAdd={this.props.onAdd}
                                                onDelete={this.props.onDelete}/>
                        } />
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
});

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (item) => {
            dispatch(addItem(item))
        },
        onDelete: (item) => {
            dispatch(deleteItem(item))
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);