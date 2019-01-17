import React, { Component } from 'react';

const withClass = (TheComponent) => {
    const WithClass = class extends Component{
        render(){
            return (
                <div>
                    <TheComponent ref={this.props.forwardRef} {...this.props}/>
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef={ref}/>
    });
}
export default withClass;