import React from "react";

export type TodoItemProp = {
  value: string;
  isDeleted?: boolean;
  uuid: string;
};

type Props = {
  data: TodoItemProp;
  onChange?: (data: TodoItemProp) => void;
};

const ToDoItem = ({ data, onChange, ...props }: Props) => {
  const ref = React.useRef(null);
  const [_data, _setData] = React.useState<TodoItemProp>(data);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const _onValue = (newValue: string) => {
    _setData({ ..._data, value: newValue });
  };

  const _onEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const _onDeleteToggle = () => {
    _setData({ ..._data, isDeleted: !_data?.isDeleted });
  };

  const _onInputEnterKeyUp = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
    // Otherwise, do nothing
  };

  React.useEffect(() => {
    if (isEditing) {
      // Focus the input field
      ref?.current?.focus();
    } else {
      ref?.current?.blur();
    }
  }, [isEditing]);

  // Update the data to the parent component
  React.useEffect(() => {
    onChange?.(_data);
  }, [_data]);

  return (
    <li
      className={`
      todo-list-item
      component
      ${isEditing ? "active" : ""}
    `}
    >
      <input
        className={`
          ${_data?.isDeleted ? "deleted" : ""}
        `}
        ref={ref}
        value={_data?.value}
        readOnly={!isEditing}
        onBlur={() => {
          setIsEditing(false);
        }}
        onFocus={() => {
          setIsEditing(true);
        }}
        onChange={(event) => _onValue(event.target.value)}
        onKeyUp={_onInputEnterKeyUp}
      />

      <a className="h-padding" href="#" onClick={_onEditToggle}>
        <span className="material-symbols-outlined">edit</span>
      </a>

      <a className="h-padding" href="#" onClick={_onDeleteToggle}>
        <span className="material-symbols-outlined">delete</span>
      </a>
    </li>
  );
};

export default ToDoItem;
