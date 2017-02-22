import React from 'react';

import Component1 from './module/Component';
import Component2 from './module/Component';
import Component3 from './module/Component';

class Hello extends React.Component {

    render() {
        return (
            <div id="test">
                <Component1 id={1}/>
                <Component2 id={2}/>
                <Component3 id={3}/>
            </div>
        );
    }
}


