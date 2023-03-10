import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';

import AnnouncementIcon from '@mui/icons-material/Announcement';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './ToDo.css';

class App extends React.Component {
  
  	constructor(props) {
  		super(props);
	
		this.state = {
			tasklist: []
		};
  	}

	componentDidMount () {
		fetch('http://10.40.2.119:8080')
			.then(response => response.json())
				.then(data => this.createTaskList(data));
	}

	createTaskList = (data) => {
		if (data.length <= 0) {
			return;
		}
		
		for (let i = 0; i < data.length; i++) {
			this.state.tasklist.push(data[i].item);
		}
	
		this.setState({
			tasklist: this.state.tasklist
		});

	}

	addTask = (task) => {
		this.state.tasklist.unshift(task);
		
		this.setState ({
			tasklist: this.state.tasklist
		});
	}

	removeTask = (taskNum) => {

		this.state.tasklist.splice(taskNum, 1);
	
		this.setState ({
			tasklist: this.state.tasklist
		});
  	}

  render() {

  	return (
    	<Box 
			sx={{
				display:'flex',
				flexWrap:'wrap',
				justifyContent:'center',
				alignContent:'center',
				height: '100%',
				background: 'linear-gradient(#c16fff, #6fe6ff, #5dffac)'
			}}
		>
			<Paper elevation={3}
				sx={{
					padding:'16px'
				}}
			>
				<Title text="ToDO List App"/>
				<TaskForm onAddTask = {this.addTask} />
				<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask}/>

				<Chip
					variant="outlined"
					color="info"
					icon={<Badge badgeContent={this.state.tasklist.length} color="info"><AnnouncementIcon color="action"/></Badge>}
					label="Pending Tasks"
				/>

			</Paper>
    	</Box>
  	);
  }
}

export default App;
