import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
    return (
        <TodoProvider>
            <div className="container">
                <h1>To-Do List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;
