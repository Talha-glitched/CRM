import './TodoTasks.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';
import React, { useState } from 'react';
import { Search, Plus, Calendar, Edit2, Trash2 } from 'lucide-react';

const ToDoTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    task: '',
    deadline: '',
    status: 'Pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      ...newTask,
      id: `TASK${Date.now()}`,
      dateOfCompletion: '',
    };
    setTasks((prev) => [...prev, task]);
    setShowModal(false);
    setNewTask({
      task: '',
      deadline: '',
      status: 'Pending',
    });
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <DNavbar />
      <div className="main-container">
        <Sidebar />
        <div className="todo-task">
          <div className="container">
            <div className="header">
              <h1>Task Management</h1>
              <div className="actions">
                <div className="search-container">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                <button className="add-button" onClick={() => setShowModal(true)}>
                  <Plus size={20} />
                  New Task
                </button>
              </div>
            </div>

            <div className="tasks-table-container">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Task</th>
                      <th>Date of Completion</th>
                      <th>Status</th>
                      <th>Deadline</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTasks.map((task) => (
                      <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.task}</td>
                        <td>{task.dateOfCompletion || 'Not completed'}</td>
                        <td>
                          <span className={`status ${task.status.toLowerCase()}`}>
                            {task.status}
                          </span>
                        </td>
                        <td>
                          <span className="deadline">
                            <Calendar size={16} className="calendar-icon" />
                            {new Date(task.deadline).toLocaleDateString()}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="action-button edit">
                              <Edit2 size={18} />
                            </button>
                            <button className="action-button delete">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Test Modal Integration */}
        {showModal && (
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            zIndex: 10000,
            border: "2px solid black"
          }}>
            <h2>Test Modal</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoTasks;
