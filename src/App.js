import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    setEditTaskId(taskId);
  };

  const handleSaveTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTaskId(null);
  };

  return (
    <div className="app-container" >
      <h1 className="app-title">Task Manager</h1>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
      {editTaskId !== null && (
        <UpdateTask
          task={tasks.find((task) => task.id === editTaskId)}
          handleSaveTask={handleSaveTask}
        />
      )}
    </div>
  );
}

export default App;
