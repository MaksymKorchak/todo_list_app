import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
export default function ToDoItem({text,removeTask,id,editTask}) {
  return (
    <div>
      <DeleteIcon onClick ={()=>removeTask(id)}/>
      <EditIcon onClick ={()=>removeTask(id)}/>
    </div>
  )
}