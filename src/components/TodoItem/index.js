import "./index.css"
import React, { useState } from 'react';

function TodoItem({ task, onDelete }) {
  const [editCount, setEditCount] = useState(0);

  const incrementEditCount = () => {
    setEditCount(prevCount => prevCount + 1);
  };

  return (
    <li className='todo-item'>
     <div>
        <span>
        {task.name}
        </span>
        <span className="edit-count"> (Updated: {editCount} times)</span>
     </div>
     <div>
        <span className="edit-btn" onClick={incrementEditCount}>✏️ </span>
        <span className="delete-btn" onClick={() => onDelete(task.id)}> ❌</span>
     </div>
      
    </li>
  );
}

export default TodoItem;
