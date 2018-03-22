var React = require('react');
var CreateReactClass = require('create-react-class');

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

require('../css/toDoComponent.css');

var ToDoComponent = CreateReactClass({  
    render: function() {       
        var todos = this.props.todos;
        todos = todos.map((item, index) => {
            return (
                <TodoItem item={item} key={index} onDelete={this.props.onDelete}/>
            )
        });
        return (
            <div>                             
                <p>To do list:</p>
                <ul id="todo-list">{todos}</ul>
                <AddItem onAdd={this.props.onAdd}/> 
            </div>                       
        );
    }
});

module.exports = ToDoComponent;