import React from 'react';

const ToDoList = (props) => {
    
    
    
    


    const handleAdd = (event) => {
        event.preventDefault();
        if (props.newTask === 0) {
            return;
        };

        const taskDict = {
            tasks: props.newTask,
            checked: false
        };
        props.setTaskList([...props.taskList, taskDict]);
        props.setNewTask("");
    };

    const handleDelete = (i) => {
        const filterTasks = props.taskList.filter((task, index) => {
            return index !== i;    
            
        });
        
        props.setTaskList(filterTasks);
        
    };

    const handleComplete = (idex) => {
        const taskUpdate = props.taskList.map((task, index) => {
            if (idex === index) {
                task.checked = !task.checked
            };
            return task
        });
        props.setTaskList(taskUpdate);
    }
    
    
        
    
    


    return(
        <div className='App'>
            <form onSubmit={(event) => {handleAdd(event);}}>
                <label>Enter a new task to your To Do List!</label>
                <div>
                <input type="text" value={props.newTask} onChange={(event) => {props.setNewTask(event.target.value);
                }}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
            <div className='todo'>{props.taskList.map((task, index) => {
                return(
                    <p key={index}>
                        <span>{task.tasks}</span>
                        <input type="checkbox"
                        checked ={task.checked}
                        onChange={(event) =>{
                            handleComplete(index);
                        }}/>
                        <button onClick= {(event) => {handleDelete(index);}}>Delete</button>
                    </p>
                );
                })};
            </div>
        </div>
    );
};


export default ToDoList;