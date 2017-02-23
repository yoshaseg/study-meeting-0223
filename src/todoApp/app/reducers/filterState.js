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
        default:
            return state;
    }
};

export default filterState;