var React = require('react');
var CreateReactClass = require('create-react-class');
require('./css/addItem.css');


var AddItem = CreateReactClass({    
    render: function() {
        return (          
            <form id="add-item" onSubmit={this.handleSubmit}>
                <input type="text" ref="newItem"/>
                <input type="submit" value="Add Item"/>
            </form>
        );
    },
    handleSubmit: function(e) {        
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;