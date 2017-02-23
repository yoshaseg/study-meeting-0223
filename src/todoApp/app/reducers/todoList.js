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
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    task: action.value,
                    mode: "show",
                    status: "active",
                }
            ];
        case 'CHANGE_ITEM_MODE_EDIT':
            return [
                ...state.slice(0, action.index),
                {
                    task: state[action.index].task,
                    mode: "edit",
                    status: state[action.index].status,
                },
                ...state.slice(action.index + 1),
            ];
        case 'EDIT_ITEM_TASK':
            return [
                ...state.slice(0, action.index),
                {
                    task: action.value,
                    mode: state[action.index].mode,
                    status: state[action.index].status,
                },
                ...state.slice(action.index + 1),
            ];
        case 'COMPLETE_EDIT_ITEM':
            return state.map(item=> {
                return Object.assign({}, item, {
                    mode: "show"
                })
            });

        case 'TOGGLE_ITEM_STATUS':
            return [
                ...state.slice(0, action.index),
                {
                    task: state[action.index].task,
                    mode: state[action.index].mode,
                    status: state[action.index].status == "active" ? "done" : "active",
                },
                ...state.slice(action.index + 1),
            ];
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.index),
                {
                    task: state[action.index].task,
                    mode: state[action.index].mode,
                    status: "deleted",
                },
                ...state.slice(action.index + 1),
            ];
        case 'ALL_DONE':
            return state.map(item=> {
                if (item.status == "deleted") return item;
                return Object.assign({}, item, {
                    status: "done"
                })
            });
        default:
            return state;
    }
};

export default todoList;