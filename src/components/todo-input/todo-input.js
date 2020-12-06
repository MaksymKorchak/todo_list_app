import React from "react";
import TextField from "@material-ui/core/TextField";


export default function ToDoInput({value, onChange, onKeyPress}) {
  return (
    <TextField
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
      label="Add new Task here..."/>
  )
}