import React, {useState} from "react";
import ToDoInput from "../../components/todo-input/todo-input";
import ToDoList from "../../components/todo-list/todo-list";
import Footer from "../../components/footer/footer";
import {connect} from 'react-redux';
import {addTask, removeTask,editTask} from '../../store/actions/actionCreator';
import ToDoContentInput from "../../components/ToDoContentInput/ToDoContentInput";

function Todo({tasks, addTask, removeTask,editTask}) {
  const [taskText, setTaskText] = useState('');
  const isTaskExist = tasks && tasks.length > 0;
  const [contentText, setContentText] = useState('');

  const handleInputChange = ({target: {value}}) => {
    setTaskText(value);
  }
  const handleContentInputChange = ({target: {value}}) => {
    setContentText(value);
  }

  const addTasks = ({key}) => {
    if (contentText.length !==0 && taskText.length > 3 && key === 'Enter') {
      addTask(tasks.length + 1, taskText, contentText);
      setTaskText('');
      setContentText('');
    }
  }

  return (
    <>
      <ToDoInput onKeyPress={addTasks} onChange={handleInputChange} value={taskText}/>
      <ToDoContentInput onKeyPress={addTasks} onChange={handleContentInputChange} value={contentText}/>
      {isTaskExist && <ToDoList tasksList={tasks} removeTask={removeTask} editTask={editTask}/>}
      {isTaskExist && <Footer amount={tasks.length}/>}
    </>
  )
}

export default connect(
  state => ({
    tasks: state.tasks,
  }), {addTask,removeTask,editTask})(Todo)