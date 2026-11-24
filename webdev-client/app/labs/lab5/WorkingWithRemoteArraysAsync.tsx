"use client";

import { useEffect, useState } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  editing?: boolean;
};

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };

  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };

  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };

  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const editTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t))
    );
  };

  const updateTodo = async (todo: Todo) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  // Textbook Lab 5 pattern: fetch todos once on mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect -- course snippet
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-working-with-remote-arrays-async">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo"
          className="cursor-pointer text-green-600"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          className="cursor-pointer text-blue-600"
        />
      </h4>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1 flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {todo.editing ? (
              <input
                className="rounded border border-neutral-300 px-2 py-0.5"
                value={todo.title}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, title: e.target.value } : t
                    )
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
            )}
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-remove-todo"
              className="cursor-pointer text-red-600"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600"
            />
            <FaPencilAlt
              onClick={() => editTodo(todo)}
              className="cursor-pointer text-blue-600"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
