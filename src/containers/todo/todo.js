import React, {useState} from "react";
import ToDoInput from "../../components/todo-input/todo-input";
import ToDoList from "../../components/todo-list/todo-list";
import Footer from "../../components/footer/footer";
import {connect} from 'react-redux';
import {addTask,removeTask} from '../../store/actions/actionCreator';

function Todo({tasks,addTask,removeTask}) {
  const [taskText, setTaskText] = useState('');
  const isTaskExist = tasks && tasks.length > 0;

  const handleInputChange = ({target: {value}}) => {
    setTaskText(value);
  }

  const addTasks = ({key})=>{
    if(taskText.length>3 && key ==='Enter'){
      addTask(tasks.length+1,taskText,false);
      setTaskText('')
    }
  }

  return (
    <div>
      <ToDoInput onKeyPress={addTasks} onChange={handleInputChange} value={taskText}/>
      {isTaskExist && <ToDoList tasksList={tasks} removeTask ={removeTask}/>}
      {isTaskExist && <Footer amount={tasks.length}/>}
    </div>
  )
}

export default connect(
  state => ({
    tasks: state.tasks,
  }),{addTask,removeTask})(Todo)