import React from 'react';

/**
 *
 */
const Header = ()=>(
        <div className="header">
            <div className="item">
                <div className="control">
                    <i className="fa fa-chevron-down"/>
                </div>
                <div className="input">
                    <input type="text" placeholder="タスクを入力してください"/>
                </div>
            </div>
        </div>
);

Header.propTypes = {};

export default Header;