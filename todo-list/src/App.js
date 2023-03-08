import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './TODO.css';

class App extends React.Component {

	constructor(props) {
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

<<<<<<< HEAD
	removeTask = (task) => {
		this.state.tasklist.splice(task, 1);
=======
	removeTask = (task_num) => {
		this.state.tasklist.splice(task_num, 1);
>>>>>>> 3c55aae90423b0fa278a354e3717c8f7058c5d81

		this.setState ({
			tasklist: this.state.tasklist
		});
	}

	render(){
		return (
			<Box 
				sx={{
					display: 'flex', 
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
				}}
			>
   	   	<Paper elevation = {3}>	
					sx={{
						padding: '16px'
					}}

					<Title text="ToDo List App"/>

					<TaskForm onAddTask={this.addTask}/>
					<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask}/>

					<p>Tienes <strong>{this.state.tasklist.length}</strong> tareas pendientes</p>
      
				</Paper>
			</Box>
		);
	}
}

export default App;
