import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {changeNewInputValue, addItem, allDone} from '../actions';

import InputText from './InputText';

/**
 *
 */
const Header = ({nbTodo, newInputValue, handleNewInputValue, handleAddItem, allDone})=>(
    <div className="header">
        <div className={nbTodo > 0 ? "item active" : "item"}>
            <div className="control">
                <i className="fa fa-chevron-down" onMouseDown={allDone}/>
            </div>
            <div className="input">
                <InputText/>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    nbTodo: PropTypes.number,
    newInputValue: PropTypes.string,

    handleNewInputValue: PropTypes.func,
    handleAddItem: PropTypes.func,
    allDone: PropTypes.func,
};

const mapStateToProps = (state, ownProps)=> {
    let nbTodo = 0;
    state.todoList.map(item=> {
        if (item.status == "active") {
            nbTodo++;
        }
    });
    return {
        nbTodo: nbTodo,
        newInputValue: state.newInputValue,
    }
};

const mapDispatchToProps = (dispatch, pwnProps) => {
    return {
        handleNewInputValue: (e)=> {
            dispatch(changeNewInputValue(e.target.value));
        },
        handleAddItem: (e)=> {
            if (e.keyCode == 13 && e.target.value.length > 0) {
                dispatch(addItem(e.target.value));
            }
        },
        allDone: ()=>{
            dispatch(allDone());
        }
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;