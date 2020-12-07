import React from "react";
import TextField from "@material-ui/core/TextField";

export default function ToDoContentInput({value, onChange, onKeyPress}) {
  return (
    <>
      <TextField
       style={{marginLeft:30,width:"80%"}}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        label="Add Task content ..."/>
    </>
  )
}