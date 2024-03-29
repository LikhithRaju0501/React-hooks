import React, { useReducer, useState } from "react";
import Todos from "./Todos";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

const reducer = (todos, action) => {
  console.log(todos, action);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action?.payload?.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action?.payload?.id) {
          return { ...todo, complete: !todo?.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo?.id !== action?.payload?.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};

const ExplainUserReducerComplex = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todos key={todo?.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default ExplainUserReducerComplex;
