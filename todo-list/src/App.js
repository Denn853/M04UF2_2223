import React from 'react';

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
		console.log(task);	
		
		this.state.tasklist.unshift(task);
		
		this.setState({
			tasklist: this.state.tasklist
		});
	}

	removeTask = (task) => {
		this.state.tasklist.splice(this.state.tasklist.indexOf(task), 1);

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
