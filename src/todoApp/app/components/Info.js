import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {filterStateShape} from '../Schema';

/**
 *
 */
const Info = ({nbTodo, filterState})=>(
    <div className="info">
        {
            nbTodo > 0 ?
                <div className="state">残り{nbTodo}個のタスク</div> : <div className="state">タスクはありません！</div>
        }
        <div className="btns">
            <div className={filterState == "all" ? "btn active" : "btn"}>全て</div>
            <div className={filterState == "active" ? "btn active" : "btn"}>未対応</div>
            <div className={filterState == "done" ? "btn active" : "btn"}>終了済</div>
        </div>
    </div>
);

Info.propTypes = {
    nbTodo: PropTypes.number,
    filterState: PropTypes.shape(filterStateShape)
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
    return {}
};

const InfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);

export default InfoContainer;