import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './App.css';

class App extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			tasklist: []
		};
	}

	addTask = (task) => {
		
		this.state.tasklist.unshift(task);
		
		this.setState({
			tasklist: this.state.tasklist
		});
	}

	removeTask = (task) => {
		this.state.tasklist.splice(task, 1);

		this.setState ({
			tasklist: this.state.tasklist
		});
	}

	render(){
		return (
			<main className="App">
      	
				<Title text="ToDo List App"/>

				<TaskForm onAddTask={this.addTask}/>
				<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask}/>

				<p>Tienes <strong>{this.state.tasklist.length}</strong> tareas pendientes</p>
      	
			</main>
		);
	}
}

export default App;
