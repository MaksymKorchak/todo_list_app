import React from "react";
import TextField from "@material-ui/core/TextField";


export default function ToDoContentInput({value, onChange, onKeyPress}) {
  return (
    <>
      <TextField
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        label="Add content here..."/>
    </>
  )
}