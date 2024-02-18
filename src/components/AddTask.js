import React, { useState } from 'react';

function AddTask({ handleAddTask }) {
  const [inputTask, setInputTask] = useState('');

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = () => {
    if (inputTask.trim() !== '') {
      handleAddTask(inputTask);
      setInputTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={inputTask}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default AddTask;
