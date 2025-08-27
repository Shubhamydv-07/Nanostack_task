import React from 'react';
import ParticipantDropdown from './ParticipantDropdown';
import ActionDropdown from './ActionDropdown';

const MeetingTable = ({
  meetings,
  assets,
  participantDropdownOpen,
  setParticipantDropdownOpen,
  actionDropdownOpen,
  setActionDropdownOpen,
  participantsList,
  getStatusColor,
  getTypeColor
}) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="w-full bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Date & Time
                  <img src={assets.up_down} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Status
                  <img src={assets.up_down} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Type
                  <img src={assets.up_arrow} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Buyer Name
                  <img src={assets.down_arrow} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Brand
                  <img src={assets.down_arrow} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Dept.
                  <img src={assets.down_arrow} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Title
                  <img src={assets.up_down} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Meeting Date
                  <img src={assets.up_down} alt="" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Action
                  <img src={assets.up_down} alt="" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {meetings.map((meeting) => (
              <tr key={meeting.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {meeting.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(meeting.status)}`}>
                    {meeting.status}
                    {meeting.status === 'Follow-up' && (
                      <span className="ml-1 bg-white text-blue-600 rounded-full px-1.5 py-0.5 text-xs">(3)</span>
                    )}
                    {meeting.status === 'In Progress' && (
                      <span className="ml-1 bg-white text-orange-600 rounded-full px-1.5 py-0.5 text-xs">(1/3)</span>
                    )}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(meeting.type)}`}>
                    {meeting.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {meeting.buyerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {meeting.brand}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {meeting.dept}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {meeting.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {meeting.meetingDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ParticipantDropdown
                    participantDropdownOpen={participantDropdownOpen}
                    setParticipantDropdownOpen={setParticipantDropdownOpen}
                    participantsList={participantsList}
                    meeting={meeting}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <ActionDropdown
                    actionDropdownOpen={actionDropdownOpen}
                    setActionDropdownOpen={setActionDropdownOpen}
                    meeting={meeting}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingTable;
