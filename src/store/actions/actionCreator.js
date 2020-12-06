import {ADD_TASK, REMOVE_TASK,EDIT_TASK} from "../constants/constants";

export const addTask = (id, text) => ({
  type: "ADD_TASK",
  id,
  text
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
})

export const editTask=(id,text)=>({
  type:"EDIT_TASK",
  id,
  text
})