import React, {Fragment} from "react"
import Title from "./components/title/title";
import Todo from "./containers/todo/todo";

function App() {
  return (
   <Fragment>
     <Title title ="ToDoList"/>
     <Todo/>
   </Fragment>
  );
}

export default App;
