"use client";

import { useState } from "react";
export default function WorkingWithRemoteArrays() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "New Task",
    description: "New Description",
    completed: false,
  });

  return (
    <div id="wd-working-with-remote-arrays">
      <h3>Working With Remote Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" href={API}>
        Get Todos
      </a>
      <br />
      <a id="wd-retrieve-completed-todos" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <br />
      <a id="wd-retrieve-todo-by-id" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a id="wd-create-todo" href={`${API}/create`}>
        Create Todo
      </a>

      <a id="wd-remove-todo" href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        id="wd-update-todo-title"
      >
        Update Todo
      </a>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <a
        id="wd-update-todo-completed"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Complete Todo ID = {todo.id}
      </a>
      <input
        id="wd-todo-completed"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <br />
      <a
        id="wd-update-todo-description"
        href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
      >
        Describe Todo ID = {todo.id}
      </a>
      <input
        id="wd-todo-description"
        value={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value })
        }
      />
    </div>
  );
}
