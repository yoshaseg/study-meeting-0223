import React from 'react';

import Component1 from './module/Component';
import Component2 from './module/Component';
import Component3 from './module/Component';

class Hello extends React.Component {

    render() {
        return (
            <div id="test">
                <Component1 id={1}
                            data={""}
                            handleClick={""}
                            onState1={""}
                            onState2={""}
                            onState3={""}
                            onState4={""}
                            onState5={""}
                            onState6={""}
                            onState7={""}
                            onState8={""}
                            onState9={""}
                            onState10={""}/>

                <Component2 id={2}
                            data={""}
                            handleClick={""}
                            onState1={""}
                            onState2={""}
                            onState3={""}
                            onState4={""}
                            onState5={""}
                            onState6={""}
                            onState7={""}
                            onState8={""}
                            onState9={""}
                            onState10={""}
                />
                <Component3 id={3}/>
            </div>
        );
    }
}


