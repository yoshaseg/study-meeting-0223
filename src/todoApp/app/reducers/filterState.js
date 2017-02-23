/**
 *
 * filterState.
 *
 * @param state
 * @param action
 * @returns {string}
 */
const filterState = (state = "all", action)=> {
    switch (action.type) {
        case 'CHANGE_FILTER_STATE':
            return action.value;
        default:
            return state;
    }
};

export default filterState;