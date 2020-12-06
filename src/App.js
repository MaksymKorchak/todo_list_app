import React, {Fragment} from "react"
import Title from "./components/title/title";
import Todo from "./containers/todo/todo";

function App() {
  return (
   <Fragment>
     <Title title ="Todo App"/>
     <Todo/>
   </Fragment>
  );
}

export default App;
