import React, { useState } from 'react';
import './Todo.css';          // ← make sure the path is correct

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!inputValue.trim()) return;          // guard against empty input
    setTasks(prev => [...prev, inputValue]);
    setInputValue('');                       // clear field
  };

  const deleteTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  // allow “Enter” key to add
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className="todo-section">
      <h1 className="header">Todo App</h1>

      <div className="input-row">
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          className="input"
          placeholder="Enter your task"
        />
        <button onClick={addTask} className="btn">Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task}</span>
            <button
              aria-label="Delete task"
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
