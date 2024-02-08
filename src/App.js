import React, { useState } from "react";
import Todo from "./components/Todo/Todo";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const newTodo = {
            id: Date.now(),
            task: input,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
        setInput("");
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <form
                onSubmit={handleAddTodo}
                className="flex justify-between mb-6"
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a todo"
                    className="border-2 border-gray-200 p-2 flex-grow mr-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </form>
            <div>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
