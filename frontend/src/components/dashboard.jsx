import { assets, sidebarItems, meetings, participantsList, chatMessages, notifications } from '../assets/assets';
import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PageHeader from './PageHeader';
import TabFilter from './TabFilter';
import FilterBar from './FilterBar';
import MeetingTable from './MeetingTable';
import Pagination from './Pagination';

const dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [chatDropdownOpen, setChatDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [participantDropdownOpen, setParticipantDropdownOpen] = useState(null);
  const [actionDropdownOpen, setActionDropdownOpen] = useState(null);

  const chatRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setChatDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      // Close participant and action dropdowns when clicking outside
      if (!event.target.closest('.participant-dropdown') && !event.target.closest('.participant-trigger')) {
        setParticipantDropdownOpen(null);
      }
      if (!event.target.closest('.action-dropdown') && !event.target.closest('.action-trigger')) {
        setActionDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Upcoming': return 'bg-orange-100 text-orange-800';
      case 'Follow-up': return 'bg-blue-100 text-blue-800 relative';
      case 'Re-scheduled': return 'bg-purple-100 text-purple-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-orange-100 text-orange-800';
      case 'Ongoing': return 'bg-gray-900 text-white';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Archived': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    return type === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="flex bg-gray-50">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarItems={sidebarItems}
        assets={assets}
      />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 overflow-x-auto">
        <Header
          setSidebarOpen={setSidebarOpen}
          chatDropdownOpen={chatDropdownOpen}
          setChatDropdownOpen={setChatDropdownOpen}
          notificationDropdownOpen={notificationDropdownOpen}
          setNotificationDropdownOpen={setNotificationDropdownOpen}
          profileDropdownOpen={profileDropdownOpen}
          setProfileDropdownOpen={setProfileDropdownOpen}
          chatMessages={chatMessages}
          notifications={notifications}
          chatRef={chatRef}
          notificationRef={notificationRef}
          profileRef={profileRef}
          assets={assets}
        />

        {/* Page content */}
        <div className="flex-1 overflow-auto p-4 lg:p-6">
          <PageHeader />
          
          <TabFilter activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <FilterBar />

          <MeetingTable
            meetings={meetings}
            assets={assets}
            participantDropdownOpen={participantDropdownOpen}
            setParticipantDropdownOpen={setParticipantDropdownOpen}
            actionDropdownOpen={actionDropdownOpen}
            setActionDropdownOpen={setActionDropdownOpen}
            participantsList={participantsList}
            getStatusColor={getStatusColor}
            getTypeColor={getTypeColor}
          />

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default dashboard;