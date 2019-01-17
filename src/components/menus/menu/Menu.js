import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../authContext';

class Menu extends Component {

    constructor(props){
        super( props );
        this.inputElement = React.createRef();
    }

    focus = () => {
        this.inputElement.current.focus(); 
    }

    render (){
        return (
            <div className="my-menu">
                <AuthContext.Consumer>
                    {auth  => auth ? <p>i'm authenticated!</p> : null }
                </AuthContext.Consumer>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <span>{this.props.price}</span>
                <div>
                    <input 
                        ref={this.inputElement}
                        type="text" 
                        onChange={this.props.changeMe} 
                    />
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    changeMe: PropTypes.func
}
export default withClass(Menu);