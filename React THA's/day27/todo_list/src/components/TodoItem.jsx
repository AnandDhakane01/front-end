import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions/index";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h4>{todo}</h4>
            <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
