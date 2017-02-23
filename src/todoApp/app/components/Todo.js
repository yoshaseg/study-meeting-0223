import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {todoShape} from '../Schema';

import {changeItemModeEdit, toggleItemStatus, removeItem} from '../actions';
import InputText from './InputText';

/**
 *
 */
const TodoItem = ({index, item, editItem, toggleItemStatus, removeItem})=> {

    let itemClass = "item";
    if (item.status == "done") {
        itemClass += " complete";
    } else {
        itemClass += " active";
    }

    return (
        <div key={"item_" + index} className={itemClass}>
            <div className="control">
                {
                    item.status == "done" ?
                        <i className="fa fa-check-circle-o" onMouseDown={toggleItemStatus}/> :
                        <i className="fa fa-circle-thin" onMouseDown={toggleItemStatus}/>
                }
            </div>
            <div className="input">
                {
                    item.mode == "show" ?
                        item.status == "done" ? <p>{item.task}</p> :
                            <p onDoubleClick={editItem}>{item.task}</p> :
                        <InputText index={index} value={item.task}/>
                }
            </div>
            <div className="remove">
                <i className="fa fa-trash-o" onMouseDown={removeItem}/>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    index: PropTypes.number,
    item: PropTypes.shape(todoShape),

    editItem: PropTypes.func,
    toggleItemStatus: PropTypes.func,
    removeItem: PropTypes.func,
};

const mapStateToProps = (state, ownProps)=> {
    return {
        index: ownProps.index,
        item: ownProps.item,
    }
};

const mapDispatchToProps = (dispatch, pwnProps) => {
    return {
        editItem: ()=> {
            dispatch(changeItemModeEdit(pwnProps.index));
        },
        toggleItemStatus: ()=> {
            dispatch(toggleItemStatus(pwnProps.index));
        },
        removeItem: ()=> {
            dispatch(removeItem(pwnProps.index));
        }

    }
};

const TodoItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem);

export default TodoItemContainer;