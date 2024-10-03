import React from 'react';
import meetingsData from '../resources/meeting.json'; // Import JSON data

const Record = ({ meetingId, onClose }) => {
  // Find the meeting with the given ID
  const meeting = meetingsData.find((meeting) => meeting.id === meetingId);

  if (!meeting) {
    return null; // If no meeting is found, return null
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-85 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full h-5/6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">{meeting.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &#x2715; {/* Close button */}
          </button>
        </div>
        <p><strong>Date:</strong> {meeting.date}</p>
        <p><strong>Start Time:</strong> {meeting["start time"]}</p>

        {/* Display the agenda */}
        {meeting.agenda.length > 0 && (
          <div className="mt-4 space-y-6">
            {meeting.agenda.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-2"><strong>Time Allotted:</strong> {item["time allotted"]}</p>
                
                {/* Discussion */}
                {item.discussion.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-600 mt-2">Discussion:</h4>
                    <ul className="list-disc list-inside ml-5 mb-2">
                      {item.discussion.map((point, idx) => (
                        <li key={idx} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Conclusion */}
                {item.conclusion.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-600 mt-2">Conclusion:</h4>
                    <ul className="list-disc list-inside ml-5 mb-2">
                      {item.conclusion.map((point, idx) => (
                        <li key={idx} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Action Items */}
                {item["action items"].length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-600 mt-2">Action Items:</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person in Charge</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {item["action items"].map((action, idx) => (
                            <tr key={idx}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{action.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{action.personincharge}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{action.Deadline}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Next meeting */}
        {meeting["next meeting"] && (
          <p className="mt-6 text-gray-600"><strong>Next Meeting:</strong> {meeting["next meeting"]}</p>
        )}
      </div>
    </div>
  );
};

export default Record;
