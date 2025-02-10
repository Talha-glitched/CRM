import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { Plus } from 'lucide-react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    startDate: '',
    endDate: ''
  });

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', startDate: '', endDate: '' });
    setShowModal(false);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button className="add-event-btn" onClick={() => setShowModal(true)}>
          <Plus size={20} />
          Add Event
        </button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day.toString()} className="calendar-day">
            <span className="day-number">{format(day, 'd')}</span>
            <div className="events">
              {events
                .filter(
                  (event) =>
                    new Date(event.startDate) <= day &&
                    new Date(event.endDate) >= day
                )
                .map((event, index) => (
                  <div key={index} className="event">
                    {event.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Event</h3>
            <form onSubmit={handleAddEvent}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={newEvent.startDate}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, startDate: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={newEvent.endDate}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, endDate: e.target.value })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit">Add Event</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;