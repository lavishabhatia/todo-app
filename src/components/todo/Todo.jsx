import { useState, useMemo, createRef, useEffect } from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

import TodoToolbox from "./TodoToolbox";
import TodoList from "./TodoList";
import NoData from "../NoData";
import useLocalStorage from "../../hooks/useLocalStorage";

const initailState = {
  name: "",
  completed: false,
  show: false,
  id: 0,
};

function Todo() {
  const [todo, setTodo] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const { value, set } = useLocalStorage("todo");

  const handleTodoAdd = (name) => {
    setTodo((todo) => [...todo, { name, completed: false }]);
  };

  const handleTodoComplete = (id) => {
    setTodo((todo) =>
      todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleTodoEdit = (id, name) => {
    setTodo((todo) =>
      todo.map((todo) => {
        if (todo.id === id) {
          todo.name = name;
        }
        return todo;
      })
    );
  };

  const handleTodoDelete = (id) => {
    setTodo((todo) => todo.filter((todo) => todo.id !== id));
  };

  const stats = useMemo(() => {
    const count = { completed: 0, pending: 0 };

    todo?.forEach((todo) => {
      if (todo?.completed) {
        count.completed++;
      } else {
        count.pending++;
      }
    });

    return count;
  }, [todo]);

  const showTodo = useMemo(() => {
    return todo?.filter((todo) => todo.completed === isCompleted);
  }, [isCompleted, todo]);

  useEffect(() => {
    set(todo);
  }, [todo]);

  useEffect(() => {
    setTodo(value);
  }, [value]);

  return (
    <div>
      <div className=" my-5">
        <TodoToolbox
          onTodoAdd={(newTodo) => {
            setTodo((todo) => (todo?.length ? [...todo, newTodo] : [newTodo]));
            setIsCompleted(false);
          }}
        />
      </div>

      <div>
        <Stack direction="row" spacing={1}>
          <Badge badgeContent={`${stats.pending}`} color="primary">
            <button onClick={() => setIsCompleted(!isCompleted)}>
              <Chip
                variant={!isCompleted ? "filled" : "outlined"}
                label="Pending"
              ></Chip>
            </button>
          </Badge>
          <Badge badgeContent={`${stats.completed}`} color="primary">
            <button onClick={() => setIsCompleted(!isCompleted)}>
              <Chip
                variant={isCompleted ? "filled" : "outlined"}
                label="Completed"
              ></Chip>
            </button>
          </Badge>
        </Stack>
      </div>
      <div className=" mt-5">
        {showTodo?.length ? (
          <TodoList
            items={showTodo}
            onFilterChange={(value) => setIsCompleted(value)}
            onComplete={handleTodoComplete}
            onChange={handleTodoEdit}
            onDelete={handleTodoDelete}
          />
        ) : (
          <NoData
            text={
              isCompleted
                ? "You still have your task pending !!"
                : "Add some task"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Todo;