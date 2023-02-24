import React from 'react';

class TaskItem extends React.Component{
	
	render() {
		return (
			<ol>
				<li>Comprar patatas <button type="button">🗑️</button></li>
			</ol>
		);
	}
}

export default TaskItem;
