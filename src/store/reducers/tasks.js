import {ADD_TASK, REMOVE_TASK, EDIT_TASK} from "../constants/constants";

const TASKS = [
  {
    id: 1,
    title: "Learn ReactJS",
    content: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
  },
  {
    id: 2,
    title: "Learn NodeJS",
    content: "Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user."
  },
  {
    id: 3,
    title: "Learn JAVA",
    content: "Oops… Yeah, that’s what is Java! Object-Oriented Programming Language that is based on the concept of Object-Oriented Programming Systems (OOPS).\n" +
      "\n" +
      "Everything in Java is about objects. If you get the essence of objects, Java is as simple and likable as eating your favorite food.\n" +
      "\n" +
      "Okay, but why should you learn Java? After all, there are so many programming languages just like food..."
  }

]

const tasks = (state = TASKS, {id, title, content, type}) => {
  switch (type) {
    case ADD_TASK:
      return [...state, {id, title, content}];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case EDIT_TASK:
      return state.map(todo => todo.id === id ? {...todo, title: title} : todo)
    default:
      return state;
  }
}
export default tasks;