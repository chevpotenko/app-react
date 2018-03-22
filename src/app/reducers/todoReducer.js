const todoReducer = (state = {
        todos: ['HTML', 'CSS', 'JS']
}, action) => {
    switch (action.type) {
        case 'ADD':
            var updatedTodos = state.todos.map((val) => {
                return val;
            });
            updatedTodos.push(action.payload);            
            state = {                
                todos: updatedTodos
            }
            break;
        case 'DELETE':
            var updatedTodos = state.todos.filter(function(val) {
                return action.payload !== val;
            });
            state = {                
                todos: updatedTodos
            }
            break;
        default:
            break;
    }
    return state;
}
export default todoReducer;