import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {todoShape} from '../Schema';

/**
 *
 */
const Body = ({todoList})=> {


    return (
        <div className="body">
            {
                todoList.map(item=> {
                    if (item.status == "deleted")return;
                    let itemClass = "item";
                    if (item.status == "done") {
                        itemClass += " complete";
                    } else {
                        itemClass += " active";
                    }
                    return (
                        <div key={"item_" + item.id} className={itemClass}>
                            <div className="control">
                                {
                                    item.status == "done" ?
                                        <i className="fa fa-check-circle-o"/> :
                                        <i className="fa fa-circle-thin"/>
                                }
                            </div>
                            <div className="input">
                                {
                                    item.mode == "show" ?
                                        <p>{item.task}</p> :
                                        <input type="text" placeholder="タスクを入力してください" value={item.task}/>
                                }
                            </div>
                            <div className="remove">
                                <i className="fa fa-trash-o"/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

Body.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape(todoShape))
};

const mapStateToProps = (state, ownProps)=> {
    return {
        todoList: state.todoList,
    }
};

const mapDispatchToProps = (dispatch, pwnProps) => {
    return {}
};

const BodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);

export default BodyContainer;