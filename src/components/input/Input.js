import React, {Component} from 'react';
import classes from './Input.css';
class Input extends Component{
    render(){

        let inputElement = null;
        switch(this.props.inputtype){
            case "input":
                inputElement = <input className={classes.Input} {...this.props} />;
                break;
            case "textarea":
                inputElement = <textarea className={classes.Input} {...this.props} />;
                break;
            default:
                inputElement = <input className={classes.Input} {...this.props} />;
                break;
        }


        return (
            <div>
                <label className={classes.Label}> {this.props.label}</label>
                {inputElement}
            </div>
        );
    }
}

export default Input;