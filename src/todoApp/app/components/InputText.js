import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {changeNewInputValue, addItem, editItemTask, completeEditItem} from '../actions';

/**
 *
 */
const InputText = ({inputValue, handleInputValue, handleAddItem})=> {

    return (
        <input type="text"
               placeholder="タスクを入力してください"
               value={inputValue}
               onChange={handleInputValue}
               onKeyDown={handleAddItem}
        />
    );
};

InputText.propTypes = {
    inputValue: PropTypes.string,

    inputMode: PropTypes.oneOf(["add", "edit"]),

    handleInputValue: PropTypes.func,
    handleAddItem: PropTypes.func,
};

const mapStateToProps = (state, ownProps)=> {
    let inputValue = ownProps.value;
    if (!inputValue) {
        inputValue = state.newInputValue;
    }

    return {
        index: ownProps.index,
        inputValue: inputValue,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        handleInputValue: (e)=> {
            if (typeof ownProps.index == "undefined") {
                // 新規登録
                dispatch(changeNewInputValue(e.target.value));
            } else if (ownProps.index >= 0) {
                // 編集
                dispatch(editItemTask(ownProps.index, e.target.value));
            }
        },

        handleAddItem: (e)=> {
            if (e.keyCode == 13 && e.target.value.length > 0) {
                if (typeof ownProps.index == "undefined") {
                    // 新規登録
                    dispatch(addItem(e.target.value));
                } else if (ownProps.index >= 0) {
                    // 編集
                    dispatch(completeEditItem());
                }
            }
        }
    }
};

const InputTextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputText);

export default InputTextContainer;