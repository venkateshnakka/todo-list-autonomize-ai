import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [newTask, setNewTask] = useState('');
  const [quantity, setQuantity] = useState(1);

  const addTask = () => {
    if (!newTask) return;
    const newTasks = [];
    for (let i = 0; i < quantity; i++) {
      const taskId = Date.now() + i;
      newTasks.push({ id: taskId, name: newTask });
    }
    setTasks(prevTasks => [...prevTasks, ...newTasks]);
    setTotalCount(prevCount => prevCount + quantity);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setTotalCount(prevCount => prevCount - 1);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        placeholder="Quantity"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
      <p>Total tasks: {totalCount}</p>
    </div>
  );
}

export default App;
