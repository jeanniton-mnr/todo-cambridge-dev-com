// ToDos (list of ToDo)

import ToDoItem, { TodoItemProp } from "./ToDoItem";

type Props = {
  data: Array<TodoItemProp>;
  onChange: (todo: TodoItemProp) => void;
};

const ToDos = ({ data, onChange, ...props }: Props) => {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {data.map((item: TodoItemProp, ind: number) => {
          return (
            <div key={item.uuid}>
              <ToDoItem data={item} onChange={onChange} />
              <div className="spacer-1"></div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDos;
