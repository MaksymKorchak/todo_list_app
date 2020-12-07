import React, {Fragment} from "react"
import Title from "./components/title/title";
import Todo from "./containers/todo/todo";
import {Typography} from "@material-ui/core";

function App() {
  return (
   <Fragment>
     <Typography variant={"overline"} color={"textSecondary"}>Press "ENTER" for save Task</Typography>
     <Title title ="ToDoList"/>
     <Todo/>
   </Fragment>
  );
}

export default App;
