var createStore = require('redux').createStore;
import todoReducer from './reducers/todoReducer';

export default createStore(todoReducer);