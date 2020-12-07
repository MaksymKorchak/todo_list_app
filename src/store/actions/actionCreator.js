import {ADD_TASK, REMOVE_TASK, EDIT_TASK} from "../constants/constants";

export const addTask = (id, title, content) => ({
    type: "ADD_TASK",
    id,
    title,
    content
});

export const removeTask = id => ({
    type: "REMOVE_TASK",
    id
})

export const editTask = (id, title, content) => ({
    type: "EDIT_TASK",
    id,
    title,
    content
})