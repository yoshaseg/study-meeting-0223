/**
 *
 * newInputValue.
 *
 * @param state
 * @param action
 * @returns {string}
 */
const newInputValue = (state = "", action)=> {
    switch (action.type) {
        case 'CHANGE_NEW_INPUT_VALUE':
            return action.value;
        case 'ADD_ITEM':
            return "";
        default:
            return state;
    }
};

export default newInputValue;