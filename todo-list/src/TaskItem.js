import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import Button from '@mui/material/Button';

class TaskItem extends React.Component{
	
	constuctor(props) {
		super(props);
	
		this.state = {
			open: false
		};
	}

	openDialog = () => {
		this.setState({
			open: true
		});
	}

	closeDialog = () => {
		this.setState({
			open: false
		});
	}

	render() {
		return (
			<ListItem>
				<ListItemText primary={this.props.text} /> 
					
					<Tooltip title="Delete" onClick={this.openDialog()}>
						
						<IconButton> 
							<DeleteIcon />
						</IconButton>

					</Tooltip>
					
					<Dialog open={this.state.open}>
						<DialogContent> 
							<DialogContentText>
								Estás a punto de borrar esta tarea. 
								¿Estás seguro que quieres eliminarla?
							</DialogContentText>
						</DialogContent>	
						
						<DialogActions>
							<Button color="secondary" onClick={this.closeDialog}> Discard </Button>
							<Button variant="contained" color="error" autofocus> Delelte </Button>	
						</DialogActions>

					</Dialog>
	
		</ListItem>	
		);
	}
}

export default TaskItem;
