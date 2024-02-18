import React, { useState } from 'react';

function TaskList({ tasks, handleEditTask, handleDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.text}
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
