import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task.name}
      <span className="delete-btn" onClick={() => onDelete(task.id)}>❌</span>
    </li>
  );
}

export default TodoItem;
