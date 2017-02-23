export const changeNewInputValue = (value)=> {
    return {
        type: "CHANGE_NEW_INPUT_VALUE",
        value
    }
};

export const addItem = (value)=> {
    return {
        type: "ADD_ITEM",
        value
    }
};

export const changeItemModeEdit = (index)=> {
    return {
        type: "CHANGE_ITEM_MODE_EDIT",
        index
    }
};

export const editItemTask = (index, value)=> {
    return {
        type: "EDIT_ITEM_TASK",
        index, value,
    }
};

export const completeEditItem = ()=> {
    return {
        type: "COMPLETE_EDIT_ITEM",
    }
};

export const toggleItemStatus = (index)=> {
    return {
        type: "TOGGLE_ITEM_STATUS",
        index,
    }
};

export const removeItem = (index)=> {
    return {
        type: "REMOVE_ITEM",
        index,
    }
};

export const allDone = ()=> {
    return {
        type: "ALL_DONE",
    }
};

export const changeFilterState = (value)=> {
    return {
        type: 'CHANGE_FILTER_STATE',
        value
    }
};