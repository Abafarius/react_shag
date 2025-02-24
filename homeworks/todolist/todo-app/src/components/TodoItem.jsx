function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
      <li>
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button onClick={() => removeTodo(todo.id)}>❌</button>
      </li>
    );
  }
  
  export default TodoItem;
  