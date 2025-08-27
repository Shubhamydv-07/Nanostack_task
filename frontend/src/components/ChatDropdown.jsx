import React from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatDropdown = ({ chatDropdownOpen, setChatDropdownOpen, setNotificationDropdownOpen, setProfileDropdownOpen, chatMessages, chatRef }) => {
  return (
    <div className="relative" ref={chatRef}>
      <button
        onClick={() => {
          setChatDropdownOpen(!chatDropdownOpen);
          setNotificationDropdownOpen(false);
          setProfileDropdownOpen(false);
        }}
        className="relative focus:outline-none"
      >
        <MessageSquare className="w-6 h-6 text-gray-600" />
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
      </button>

      {chatDropdownOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-300 z-50">
          <div className="p-4 border-b border-gray-300 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Chat</h3>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">5 new</span>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {chatMessages.map((message) => (
              <div key={message.id} className="p-4 hover:bg-gray-50 border-b border-gray-200 last:border-b-0 flex items-start gap-3">
                <img
                  src={message.avatar}
                  alt="User"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 text-sm">{message.title}</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {message.message.split(/\[|\]/).map((part, index) =>
                      index % 2 === 1 ? (
                        <span key={index} className="text-blue-600">{part}</span>
                      ) : part
                    )}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatDropdown;
