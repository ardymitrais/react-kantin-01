import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import './App.css';
import Menus from '../components/menus/Menus';
import Cockpit from '../components/cockpit/Cockpit';
import AuthContext from '../authContext';
import axios from 'axios';
import Input from '../components/input/Input'

class App extends Component {
	state = {
		listMenu: [
			{id:"menu001",title:"Martabak",userId:20000,body:"martabak telor, daging sapi, dengan keju mozarela"},
			{id:"menu002",title:"Terang Bulan",userId:25000,body:"terang bulan dengan topping coklat, keju, dan kacang"},
			{id:"menu003",title:"Es Teh Manis",userId:5000,body:"Es teh dengan gula"},
			{id:"menu004",title:"Es Jeruk Manis",userId:8000,body:"Es Jeruk peras dengan gula"}
		],
		showListMenu:true,
		authenticated:false
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts').then( response => {
			this.setState({
				listMenu: response.data.slice(0,3)
			});
		});
	}

	toggleHandler = () =>{
		this.setState({
			showListMenu: !this.state.showListMenu
		});
	}

	myChangeHandler = (event, id) => {
		
		const menuIndex = this.state.listMenu.findIndex((p) => {
			return p.id === id;
		});
		
		const updatedMenu = [...this.state.listMenu];
		updatedMenu[menuIndex].title = event.target.value;
		
		this.setState({
			listMenu: updatedMenu
		});

	};

	loginHandler = () =>{
		this.setState({
			authenticated:true
		});
	}

	render() {

		let listMenu = null;
		if(this.state.showListMenu){
			listMenu = (
				<div>
					<Menus 
						menus={this.state.listMenu} 
						changeMe={this.myChangeHandler}
					/>
				</div>
			);
		}



		return (
			<div className="App">
				<Cockpit 
					title="React Title" 
					 clicked={this.toggleHandler}
					login={this.loginHandler}
				/>
				<AuthContext.Provider value={this.state.authenticated}>
					{listMenu}
					<Input inputtype="input" type="text" placeholder="your name" label="Name"/>
				</AuthContext.Provider>
			</div>
		);
	}
}

export default App;