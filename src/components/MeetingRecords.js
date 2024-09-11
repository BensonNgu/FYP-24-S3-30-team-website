import React, { useState } from 'react';
import meetingsData from '../resources/meeting.json'; // Import JSON data

const MeetingRecords = () => {
  const [expandedMeeting, setExpandedMeeting] = useState(null);

  const handleToggle = (meetingId) => {
      setExpandedMeeting(expandedMeeting === meetingId ? null : meetingId);
  };

  return (
    <section id="meetings" className="min-h-screen p-8 bg-stone-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">Meeting Records</h1>
        <div className="space-y-8">
            {meetingsData.map((meeting) => (
                <div
                    key={meeting.id}
                    className="bg-white rounded-lg shadow-lg border border-gray-200"
                >
                    <div
                        className="p-6 cursor-pointer"
                        onClick={() => handleToggle(meeting.id)}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{meeting.title}</h2>
                        <p className="text-gray-600 mb-2"><strong>Date:</strong> {meeting.date}</p>
                        <p className="text-gray-600 mb-4"><strong>Start Time:</strong> {meeting["start time"]}</p>
                        <p className="text-blue-500 hover:underline">{expandedMeeting === meeting.id ? 'Collapse Details' : 'Expand Details'}</p>
                    </div>
                    {expandedMeeting === meeting.id && (
                        <div className="p-6 bg-gray-50">
                            {meeting.agenda.length > 0 && (
                                <div className="space-y-6">
                                    {meeting.agenda.map((item, index) => (
                                        <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
                                            <p className="text-gray-500 mb-2"><strong>Time Allotted:</strong> {item["time allotted"]}</p>
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
                            {meeting["next meeting"] && (
                                <p className="mt-6 text-gray-600"><strong>Next Meeting:</strong> {meeting["next meeting"]}</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
  );
};

export default MeetingRecords;
