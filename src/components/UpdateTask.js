import React, { useState } from 'react';

function UpdateTask({ task, handleSaveTask }) {
  const [editedTaskText, setEditedTaskText] = useState(task.text);

  const handleInputChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  const handleSave = () => {
    handleSaveTask(task.id, editedTaskText);
  };

  return (
    <div>
      <input
        type="text"
        value={editedTaskText}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default UpdateTask;
