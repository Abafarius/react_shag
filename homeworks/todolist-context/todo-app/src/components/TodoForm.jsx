import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoForm() {
    const [text, setText] = useState("");
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить задачу..."
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default TodoForm;
