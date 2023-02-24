import React from 'react';

class TaskForm extends React.Component{
	
	render() {
		return (
			<form>
         	<p><input type="text" name="task" placeholder="Escribe una nueva tarea" /></p>
         	<p><button type="button" name="add-task">+</button></p>
   	   </form>
		);
	}
}

export default TaskForm;
