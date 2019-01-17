import React, {PureComponent} from 'react';
import Menu from './menu/Menu';


class Menus extends PureComponent {

	constructor(props){
		super( props );
		this.lastMenuRef = React.createRef();
	}
	componentDidMount(){
		this.lastMenuRef.current.focus();
	}

  // (props) => props.menus.map((menu, index) => {
  	render() {
		return this.props.menus.map((menu, index) => {
			return (<Menu
					name={menu.title}
					price={menu.userId}
					description={menu.body}
					changeMe={(event) => this.props.changeMe(event, menu.id)}
					ref={this.lastMenuRef}
					key={menu.id}>
				</Menu>
			);
		});
  	}
}
export default Menus;