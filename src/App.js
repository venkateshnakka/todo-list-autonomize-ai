import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
function App() {
  const [tasks, setTasks] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    const taskData = inputValue.split(' ');
    const taskName = taskData.slice(0, -1).join(' ');
    const quantity = parseInt(taskData[taskData.length - 1], 10) || 1;

    if (!taskName) return;

    const newTasks = [];
    for (let i = 0; i < quantity; i++) {
      const taskId = Date.now() + i;
      newTasks.push({ id: taskId, name: taskName });
    }

    setTasks(prevTasks => [...prevTasks, ...newTasks]);
    setTotalCount(prevCount => prevCount + quantity);
    setInputValue('');
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setTotalCount(prevCount => prevCount - 1);
  };

  return (
    <div className="todos-container">
      <h2>Daily Goals!</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task with count (e.g., Write code 3)"
      /><br/>
      <button onClick={addTask}>Add Todo</button>
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