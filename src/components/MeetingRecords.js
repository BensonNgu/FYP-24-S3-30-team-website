import React, { useState } from 'react';
import { Button } from '@mui/material'; // Import MUI Button
import InfoIcon from '@mui/icons-material/Info'; // Import MUI Icon
import meetingsData from '../resources/meeting.json'; // Import JSON data
import Record from './Record';

const MeetingRecords = () => {
  const [selectedMeetingId, setSelectedMeetingId] = useState(null);

  const openModal = (meetingId) => {
    setSelectedMeetingId(meetingId); // Set the selected meeting ID to open in the modal
  };

  const closeModal = () => {
    setSelectedMeetingId(null); // Close the modal by clearing the selectedMeetingId
  };

  return (
    <section id="meetings" className="min-h-screen p-8 bg-stone-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">Meeting Records</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meetingsData.map((meeting) => (
          <div key={meeting.id} className="bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{meeting.title}</h2>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> {meeting.date}</p>
              <p className="text-gray-600 mb-4"><strong>Start Time:</strong> {meeting["start time"]}</p>
              {/* MUI Button with Icon */}
              <Button
                variant="text"
                color="primary"
                startIcon={<InfoIcon />} // Add the info icon before the text
                onClick={() => openModal(meeting.id)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Record.js */}
      {selectedMeetingId && (
        <Record meetingId={selectedMeetingId} onClose={closeModal} />
      )}
    </section>
  );
};

export default MeetingRecords;
