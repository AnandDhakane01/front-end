import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/index";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="add-todo">
      <h3 className="title">TODO LIST</h3>
      <input
        type="text"
        placeholder="todo"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          setItem("")
          dispatch(addItem(item));
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
