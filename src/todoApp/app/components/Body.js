import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {todoShape} from '../Schema';
import Todo from './Todo';

/**
 *
 */
const Body = ({todoList, filterState})=> {


    return (
        <div className="body">
            {
                todoList.map((item, index)=> {
                    if (item.status == "deleted")return;
                    if (filterState == "active") {
                        if (item.status == "done")return;
                    } else if (filterState == "done") {
                        if (item.status == "active")return;
                    }
                    return (
                        <Todo index={index} item={item}/>
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
        filterState: state.filterState,
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