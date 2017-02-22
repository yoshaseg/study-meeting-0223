import {combineReducers} from 'redux'

import todoList from './todoList';

/**
 * reducerをまとめる
 */
const todoApp = combineReducers({
    todoList,
});

export default todoApp
