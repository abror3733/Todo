// TodoWrapper.js

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoWrapper() {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo"))|| []);

  window.localStorage.setItem("todo",JSON.stringify(todo))
  return (
    <div className='TodoWrapper'>
      <TodoForm todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default TodoWrapper;
