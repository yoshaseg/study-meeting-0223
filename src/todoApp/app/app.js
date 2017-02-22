import React from 'react';

import Header from './components/Header';

/**
 *
 */
const App = ()=>(
    <div>
        <Header/>
        <div className="body">
            <div className="item complete">
                <div className="control">
                    <i className="fa fa-check-circle-o"/>
                </div>
                <div className="input">
                    <p>ああああああああああああ</p>
                </div>
                <div className="remove">
                    <i className="fa fa-trash-o"/>
                </div>
            </div>
            <div className="item active">
                <div className="control">
                    <i className="fa fa-circle-thin"/>
                </div>
                <div className="input">
                    <input type="text" placeholder="タスクを入力してください"/>
                </div>
                <div className="remove">
                    <i className="fa fa-trash-o"/>
                </div>
            </div>
        </div>
        <div className="info">

            <div className="state">残り3個のタスク</div>

            <div className="btns">
                <div className="btn active">全て</div>
                <div className="btn">未対応</div>
                <div className="btn">終了済</div>
            </div>
        </div>
    </div>

);

App.propTypes = {};

export default App;