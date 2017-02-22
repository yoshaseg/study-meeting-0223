import React from 'react';

export default class Component extends React.Component {

    render() {
        return (
            <div id={"component_" + this.props.id}>
            </div>
        );
    }
}


