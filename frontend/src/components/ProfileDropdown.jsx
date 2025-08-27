import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';

const ProfileDropdown = ({ profileDropdownOpen, setProfileDropdownOpen, setChatDropdownOpen, setNotificationDropdownOpen, profileRef }) => {
  return (
    <div className="relative" ref={profileRef}>
      <button
        onClick={() => {
          setProfileDropdownOpen(!profileDropdownOpen);
          setChatDropdownOpen(false);
          setNotificationDropdownOpen(false);
        }}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Shubham Yadav</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
        </div>
      </button>

      {profileDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-400 z-50">
          <div className="py-2">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <User className="w-4 h-4 mr-3 text-gray-400" />
              Profile
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <Settings className="w-4 h-4 mr-3 text-gray-400" />
              Settings
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <LogOut className="w-4 h-4 mr-3 text-gray-400" />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;