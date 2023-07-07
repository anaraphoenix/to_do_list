import React, {useState} from 'react';
import './App.css';
import ToDoList from './components/toDoList';

function App() {
  const [newTask, setNewTask] = useState(""); //input box
  const [taskList, setTaskList] = useState([]); //list of to dos
  return (
    <div className="App">
      <ToDoList newTask={newTask} setNewTask={setNewTask}
      taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
