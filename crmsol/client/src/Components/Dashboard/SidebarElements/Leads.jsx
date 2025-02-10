import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import './Leads.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newLead, setNewLead] = useState({
    allocatedTo: '',
    clientName: '',
    clientPhone: '',
    priority: 'Low',
    status: 'New',
    property: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLead = (e) => {
    e.preventDefault();
    const lead = {
      ...newLead,
      id: `LED${Date.now()}`,
      created: new Date().toLocaleDateString(),
    };
    setLeads((prev) => [...prev, lead]);
    setShowModal(false);
    setNewLead({
      allocatedTo: '',
      clientName: '',
      clientPhone: '',
      priority: 'Low',
      status: 'New',
      property: '',
    });
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Modal state:", showModal);
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
    <div className="lead-management">
      <div className="container">
        <div className="header">
          <h1>Lead Management</h1>
          <div className="actions">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="add-button" onClick={() => setShowModal(true)}>
              <Plus size={20} />
              Add Lead
            </button>
          </div>
        </div>

        <div className="leads-table-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Allocated To</th>
                  <th>Client Name</th>
                  <th>Client Phone</th>
                  <th>Created</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Property</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.allocatedTo}</td>
                    <td>{lead.clientName}</td>
                    <td>{lead.clientPhone}</td>
                    <td>{lead.created}</td>
                    <td>
                      <span className={`priority ${lead.priority.toLowerCase()}`}>
                        {lead.priority}
                      </span>
                    </td>
                    <td>
                      <span className={`status ${lead.status.toLowerCase().replace(' ', '-')}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>{lead.property}</td>
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

        {showModal && (
          <div className="modal-overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className="modal">
              <h2>Add New Lead</h2>
              <form onSubmit={handleAddLead}>
                <div className="form-group">
                  <label>Allocated To</label>
                  <input
                    type="text"
                    name="allocatedTo"
                    value={newLead.allocatedTo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    value={newLead.clientName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Client Phone</label>
                  <input
                    type="tel"
                    name="clientPhone"
                    value={newLead.clientPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Priority</label>
                  <select
                    name="priority"
                    value={newLead.priority}
                    onChange={handleInputChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={newLead.status}
                    onChange={handleInputChange}
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Unqualified">Unqualified</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Property</label>
                  <input
                    type="text"
                    name="property"
                    value={newLead.property}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="modal-buttons">
                  <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-button">
                    Add Lead
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
          
        )}
      </div>
    </div>
    
  );
};

export default Leads;