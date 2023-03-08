import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class TaskForm extends React.Component{

	constructor(props){
		super(props);
	
		this.state = {
			task: ""
		};
	}

	render() {
		return (
			<form>
	 			
				<p><TextField variant="standard" type="text" value={this.state.task} onChange={event => {
				
					console.log(event.target.value);
				
					this.setState({
						task:event.target.value
					});

				}} placeholder="Write a nwe task to do"/>

         	<Button variant="contained" type="button" name="add-task" onClick={() => {

					if (this.state.task.trim() == " ") {
						this.setState({
							task: ""
						});
					
						return;
					}
	
					this.props.onAddTask(this.state.task);
					
					this.setState({
						task: ""
					});
				}}>+</Button></p>

   	   </form>
		);
	}
}

export default TaskForm;
