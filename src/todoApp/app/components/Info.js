import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {filterStateShape} from '../Schema';
import {changeFilterState} from '../actions';

/**
 *
 */
const Info = ({nbTodo, filterState, changeFilterState})=>(
    <div className="info">
        {
            nbTodo > 0 ?
                <div className="state">残り{nbTodo}個のタスク</div> : <div className="state">タスクはありません！</div>
        }
        <div className="btns">
            <div className={filterState == "all" ? "btn active" : "btn"}
                 onMouseDown={filterState != "all" ? ()=> {
                     changeFilterState("all")
                 } : null }>全て
            </div>
            <div className={filterState == "active" ? "btn active" : "btn"}
                 onMouseDown={filterState != "active" ? ()=> {
                     changeFilterState("active")
                 } : null }>未対応
            </div>
            <div className={filterState == "done" ? "btn active" : "btn"}
                 onMouseDown={filterState != "done" ? ()=> {
                     changeFilterState("done")
                 } : null }>終了済
            </div>
        </div>
    </div>
);

Info.propTypes = {
    nbTodo: PropTypes.number,
    filterState: filterStateShape,
    changeFilterState: PropTypes.func,
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
        filterState: state.filterState,
    }
};

const mapDispatchToProps = (dispatch, pwnProps) => {
    return {
        changeFilterState: (mode)=> {
            dispatch(changeFilterState(mode));
        }
    }
};

const InfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);

export default InfoContainer;