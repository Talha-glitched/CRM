import React from 'react';
import './TodoTasks.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const TodoTasks = () => {
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
    <div className="todo-tasks">
      <h1>To Do Tasks</h1>
      <div className="tasks-container">
        <div className="tasks-header">
          <input type="text" placeholder="Search tasks..." className="search-input" />
          <button className="add-task-btn">Add New Task</button>
        </div>
        <div className="tasks-list">
          <div className="task-item">
            <input type="checkbox" id="task1" />
            <label htmlFor="task1">Contact new leads for follow-up</label>
            <span className="due-date">Due: Mar 15</span>
            <span className="priority high">High</span>
          </div>
          <div className="task-item">
            <input type="checkbox" id="task2" />
            <label htmlFor="task2">Prepare monthly sales report</label>
            <span className="due-date">Due: Mar 20</span>
            <span className="priority medium">Medium</span>
          </div>
          <div className="task-item">
            <input type="checkbox" id="task3" />
            <label htmlFor="task3">Update client database</label>
            <span className="due-date">Due: Mar 25</span>
            <span className="priority low">Low</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TodoTasks;