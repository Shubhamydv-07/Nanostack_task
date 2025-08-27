import React from 'react';
import { Bell, X } from 'lucide-react';

const NotificationDropdown = ({ notificationDropdownOpen, setNotificationDropdownOpen, setChatDropdownOpen, setProfileDropdownOpen, notifications, notificationRef }) => {
  return (
    <div className="relative" ref={notificationRef}>
      <button
        onClick={() => {
          setNotificationDropdownOpen(!notificationDropdownOpen);
          setChatDropdownOpen(false);
          setProfileDropdownOpen(false);
        }}
        className="relative focus:outline-none"
      >
        <Bell className="w-6 h-6 text-gray-600" />
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
      </button>

      {notificationDropdownOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-300 z-50">
          <div className="p-4 border-b border-gray-300 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">5 new</span>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-4 hover:bg-gray-50 border-gray-300 border-b border-gray-300 last:border-b-0 flex items-start space-x-3">
                {notification.avatar ? (
                  <img
                    src={notification.avatar}
                    alt="User"
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <notification.icon className="w-5 h-5 text-gray-600" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {notification.message.split(/\[|\]/).map((part, index) =>
                      index % 2 === 1 ? (
                        <span key={index} className="text-blue-600">{part}</span>
                      ) : part
                    )}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
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

export default NotificationDropdown;