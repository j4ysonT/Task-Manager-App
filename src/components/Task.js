import React from 'react';

function Task({ task, handleEditTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => handleEditTask(task.id)}>Edit</button>
      <button>Delete</button>
    </li>
  );
}

export default Task;
