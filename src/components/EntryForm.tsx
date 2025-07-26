import React from "react";
import { TodoItemProp } from "./ToDos/ToDoItem";

type Props = {
  onSubmit?: (item: TodoItemProp) => void;
};

const EntryForm = ({ onSubmit, ...props }: Props) => {
  // The value inside the entry form
  const [value, setValue] = React.useState<string>("");
  // Flag to display a toast message for 3 secs
  const [isToast, setIsToast] = React.useState<boolean>(false);

  // Update the event to the parent component / HOC
  const _onSubmit = (e) => {
    // Prevent the page from reloading
    e?.preventDefault();
    // If there is empty value / string, do nothing
    if (!value?.length) {
      return;
    }
    // Pass the value to the HOC
    onSubmit?.({
      value: value,
      isDeleted: false,
      uuid: self.crypto.randomUUID(),
    });
    // Clear / reset the input field value
    setValue("");
    // Show toast message
    setIsToast(true);
    // Hide toast after 3 secs.
    setTimeout(() => {
      setIsToast(false);
    }, 3 * 1000);
  };

  // Render the entry form
  return (
    <>
      <form className="entry-form component" onSubmit={_onSubmit}>
        <input
          className="entry-form-input"
          type="text"
          placeholder="Add your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <input
          className="entry-form-button"
          type="button"
          value="+"
          onClick={_onSubmit}
        />
      </form>
      <div className="spacer-1"></div>

      {/* Toast / Alert */}
      {isToast ? (
        <div className="toast">
          <span>ToDo item created successfully</span>
        </div>
      ) : null}
    </>
  );
};

export default EntryForm;
