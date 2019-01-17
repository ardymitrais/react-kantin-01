import React from 'react';
import Aux from '../../hoc/Aux';
import WithClass from '../../hoc/withClass'

const cockpit = (props) =>{
    return (
        <Aux>
            <h1>{props.title}</h1>
            <button onClick={props.clicked}>Show/Hide Menu</button>
            <button onClick={props.login}>Login</button>
        </Aux>
    );
}


export default WithClass(cockpit);