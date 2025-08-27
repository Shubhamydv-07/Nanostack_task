import React from 'react';

const ParticipantDropdown = ({ participantDropdownOpen, setParticipantDropdownOpen, participantsList, meeting }) => {
  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer participant-trigger"
        onClick={() => setParticipantDropdownOpen(participantDropdownOpen === meeting.id ? null : meeting.id)}
      >
        <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
          M
        </div>
        <span className="text-sm text-gray-900">Mohd Saleem +2</span>
      </div>

      {participantDropdownOpen === meeting.id && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border z-50 participant-dropdown">
          <div className="p-3 space-y-3">
            {participantsList.map((participant, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${participant.color} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                  {participant.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                  <p className="text-xs text-gray-500">{participant.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantDropdown;