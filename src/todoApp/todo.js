import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './app/app';
import todoApp from './app/reducers';

// 通常のStore定義
let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('todoApp')
);

