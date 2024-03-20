import { memo, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

function TodoToolbox({ onTodoAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleTodoAdd = (todo) => {
    // Generating an unique id for the todo . Duplication may happen but it's okay for this application.
    const randomId = Math.ceil(Math.random() * 100000);
    onTodoAdd({ id: randomId, name: todo, completed: false });
    setNewTodo("");
  };

  return (
    <div className=" grid grid-cols-2 gap-5">
      <TextField
        style={{ padding: "0px" }}
        label="Todo"
        variant="outlined"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div className=" flex items-center gap-5">
        <Button
          variant="outlined"
          className="!block !h-full"
          disabled={newTodo.length === 0}
          onClick={() => handleTodoAdd(newTodo)}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

// Used memo to preventing unnecessary re-rendering of the component.
export default memo(TodoToolbox);
