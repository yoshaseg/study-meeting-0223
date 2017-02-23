/**
 *
 * TodoList.
 *
 * @param state
 * @param action
 * @returns {Array}
 */
const todoList = (state = [{
    task: "最初のタスク",
    mode: "show",
    status: "active"
}], action)=> {
    switch (action.type) {
        default:
            return state;
    }
    return state;
};

export default todoList;