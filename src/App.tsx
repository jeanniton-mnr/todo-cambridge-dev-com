import "./styles.css";
import React from "react";

import { AppTitle, EntryForm, ToDos } from "./components/index";
import { TodoItemProp } from "./components/ToDos/ToDoItem";

const storedTodos = [
  {
    value: "Implement functionalities using ReactJS in the next meetup",
    isDeleted: false,
    uuid: `fake-uuid-1`,
  },
  {
    value: "Edit Project Video",
    isDeleted: true,
    uuid: `fake-uuid-2`,
  },
  {
    value: "Upload Video Project",
    isDeleted: false,
    uuid: `fake-uuid-3`,
  },
  {
    value: "Record a new video",
    isDeleted: false,
    uuid: `fake-uuid-4`,
  },
];

export default function App() {
  const [toDos, setToDos] = React.useState<Array<TodoItemProp>>([]);

  React.useEffect(() => {
    setToDos(storedTodos);
  }, []);

  // Load todos form local-storage

  // Add new todo in the list
  const _addNewToDo = (todo: TodoItemProp) => {
    const clonedToDos = [...toDos];
    clonedToDos.unshift(todo);
    setToDos(clonedToDos);
    // TODO: Save new list with new todo
  };

  // Update change of the todos from the local storage
  const _onChange = (todo: TodoItemProp) => {
    // alert(JSON.stringify(todo));
    // TODO: Update change in localstorage
  };

  return (
    <div className="container">
      <div className="spacer-3"></div>

      {/* Title */}
      <AppTitle />
      <div className="spacer-3"></div>

      {/* Entry form */}
      <EntryForm onSubmit={_addNewToDo} />
      <div className="spacer-3"></div>

      {/* ToDo List Container */}
      <ToDos data={toDos} onChange={_onChange} />
      <div className="spacer-3"></div>
    </div>
  );
}
