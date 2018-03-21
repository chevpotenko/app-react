var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

var TodoComponent = CreateReactClass({
    getInitialState : function() {
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    },
    render: function() {
        var todos = this.state.todos;
        todos = todos.map((item, index) => {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
        });
        return (
            <div>                             
                <p>To do list</p>
                <ul id="todo-list">{todos}</ul>
                <AddItem onAdd={this.onAdd}/> 
            </div>                       
        );
    },
    onDelete: function(item) {
        var updatedTodos = this.state.todos.filter(function(val) {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        })
    },
    onAdd: function(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        console.log(updatedTodos);
        this.setState({
            todos: updatedTodos
        })
    }

});

module.exports = TodoComponent;