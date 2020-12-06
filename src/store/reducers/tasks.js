import {ADD_TASK, REMOVE_TASK, EDIT_TASK} from "../constants/constants";

const TASKS = [
  {
    id: 1,
    text: "Learn ReactJS"
  },
  {
    id: 2,
    text: "Learn NodeJS"
  },
  {
    id: 3,
    text: "Learn JAVA"
  }

]

const tasks = (state = TASKS, {id, text,type}) => {
  switch (type) {
    case 'ADD_TASK':
      return [...state, {id,text}];
    case'REMOVE_TASK':
      return [...state].filter(task => task.id !== id);
    case 'EDIT_TASK':
      return [...state].filter(task => task.id === id);
    default:
      return state;
  }
}
export default tasks;