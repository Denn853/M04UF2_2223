import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';

class TaskItem extends React.Component {

	constructor(props) {
	
		super(props);
		this.state={
			open: false 
		}
	}
	
	openDialog = () => {
    	this.setState ({
			open: true
		});
  	}

	closeDialog = () => {
		this.setState({
			open: false
		});
	}

	removeTask = () => {
		this.closeDialog();
		this.props.onRemoveTask(this.props.taskNum);
	}

	render() {
		return (
		
		<ListItem>
			<ListItemText primary={this.props.text}/>
			<Tooltip title="Remove Task" onClick={this.openDialog}>
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
			<Dialog open={this.state.open}>
				<DialogContent>
					<DialogContentText>
						Do you want to remove the task?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button type="button" color="secondary" onClick={this.closeDialog}>Discard</Button>	
					<Button type="button" variant="contained" color="error" autofocus onClick={this.RemoveTask}>Delete</Button>	
				</DialogActions>
      		</Dialog>	
		</ListItem>
		);
	}
}

export default TaskItem;
