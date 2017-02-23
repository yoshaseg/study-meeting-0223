import {combineReducers} from 'redux'

import todoList from './todoList';
import filterState from './filterState';
import newInputValue from './newInputValue';

/**
 * reducerをまとめる
 */
const todoApp = combineReducers({
    todoList,
    filterState,
    newInputValue,
});

export default todoApp
