import React from 'react';
import { Search, Menu } from 'lucide-react';
import ChatDropdown from './ChatDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

const Header = ({
  setSidebarOpen,
  chatDropdownOpen,
  setChatDropdownOpen,
  notificationDropdownOpen,
  setNotificationDropdownOpen,
  profileDropdownOpen,
  setProfileDropdownOpen,
  chatMessages,
  notifications,
  chatRef,
  notificationRef,
  profileRef,
  assets
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-300">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-10">
            <img
              src={assets.ham_burger}
              alt="Hamburger"
              className="w-5 h-5"
            />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search anything here..."
                className="pl-12 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-10">
          <ChatDropdown
            chatDropdownOpen={chatDropdownOpen}
            setChatDropdownOpen={setChatDropdownOpen}
            setNotificationDropdownOpen={setNotificationDropdownOpen}
            setProfileDropdownOpen={setProfileDropdownOpen}
            chatMessages={chatMessages}
            chatRef={chatRef}
          />
          
          <NotificationDropdown
            notificationDropdownOpen={notificationDropdownOpen}
            setNotificationDropdownOpen={setNotificationDropdownOpen}
            setChatDropdownOpen={setChatDropdownOpen}
            setProfileDropdownOpen={setProfileDropdownOpen}
            notifications={notifications}
            notificationRef={notificationRef}
          />
          
          <ProfileDropdown
            profileDropdownOpen={profileDropdownOpen}
            setProfileDropdownOpen={setProfileDropdownOpen}
            setChatDropdownOpen={setChatDropdownOpen}
            setNotificationDropdownOpen={setNotificationDropdownOpen}
            profileRef={profileRef}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
