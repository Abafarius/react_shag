function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
      <li className={todo.completed ? "completed" : ""}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
        <button className="delete-btn" onClick={() => removeTodo(todo.id)}>❌</button>
      </li>
    );
  }
  
  export default TodoItem;
  