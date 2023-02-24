import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './App.css';

function App() {
  return (
	<main className="App">
      	
		<Title text="ToDo List App"/>

		<TaskForm/>
		<TaskList/>

		<p>Tienes <strong>3</strong> tareas pendientes</p>
      
	</main>
  );
}

export default App;
