
function TodoForm({setTodo,todo}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      id:todo.length ? todo[todo.length - 1].id + 1 : 1,
      value: evt.target.todoValue.value
    };
    setTodo([...todo,data]);
    evt.target.reset();
  };
  console.log(todo);
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <h1>Todo List</h1>
      <input className='todo-input' type="text" name='todoValue' placeholder='Enter your todo....' required autoComplete='off' />
      <button className='todo-btn' type='submit'>Add Task</button>
    </form>
  );
}

export default TodoForm;
