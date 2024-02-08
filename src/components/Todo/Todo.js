import React from "react";

function Todo({ todo, setTodos, todos }) {
    const toggleComplete = () => {
        setTodos(
            todos.map((item) =>
                item.id === todo.id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
    };

    const deleteTodo = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    return (
        <div
            className={`flex items-center justify-between bg-white p-4 shadow mb-2 ${
                todo.isCompleted ? "line-through" : ""
            }`}
        >
            <span className={todo.isCompleted ? "text-gray-400" : ""}>
                {todo.task}
            </span>
            <div>
                <button
                    onClick={toggleComplete}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
                >
                    Toggle
                </button>
                <button
                    onClick={deleteTodo}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;

