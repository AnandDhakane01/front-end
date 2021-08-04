function addItem(todo) {
  return {
    type: "ADD_ITEM",
    payload: todo,
  };
}

// todo
function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export { addItem, deleteTodo };
