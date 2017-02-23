import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

/**
 *
 */
const Header = ({nbTodo, newInputValue})=>(
    <div className="header">
        <div className={nbTodo > 0 ? "item active" : "item"}>
            <div className="control">
                <i className="fa fa-chevron-down"/>
            </div>
            <div className="input">
                <input type="text" placeholder="タスクを入力してください" value={newInputValue}/>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    nbTodo: PropTypes.number,
    newInputValue: PropTypes.string
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
    return {}
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;