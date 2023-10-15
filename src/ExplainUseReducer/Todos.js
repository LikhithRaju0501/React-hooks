import React from "react";
import { ACTIONS } from "./ExplainUserReducerComplex";

const Todos = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo?.complete ? "green" : "red" }}>
        {todo?.name}
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo?.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo?.id } })
          }
        >
          Delete
        </button>
      </span>
      <br /> <br />
    </div>
  );
};

export default Todos;
