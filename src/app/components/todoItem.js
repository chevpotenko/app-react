var React = require('react');
var CreateReactClass = require('create-react-class');
require('../css/todoItem.css');

var TodoItem = CreateReactClass({    
    render: function() {
        return (          
            <li className="item">              
                <span className="item-name">{this.props.item}</span>
                <span className="item-delete"
                      title="Delete item"
                      onClick={this.deleteItem} >x</span>               
            </li>          
        );
    },
    deleteItem: function() {
        this.props.onDelete(this.props.item);
    }
});

module.exports = TodoItem;