import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			items: this.props.list
		};
	}

	item = () => {
	
		let tasks = this.state.items.map(task => {
			return (
				<TaskItem text={task} onRemoveTask={this.props.onRemoveTask}/>
			);
		});

		return tasks;
	}

	render() {
		console.log("render");
		
		const tasks = this.item();
	
		return (
			<ol>
				{tasks}
			</ol>
		);
	}
}

export default TaskList;
