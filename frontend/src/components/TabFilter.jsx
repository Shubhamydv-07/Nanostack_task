import React from 'react';

const TabFilter = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-1 mb-2 border border-gray-300 rounded-lg px-2 py-2">
      {['All', 'Draft', 'Archive'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            activeTab === tab
              ? 'bg-purple-600 text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}{' '}
          {tab === 'All' && (
            <span className="ml-1 bg-gray-400 text-white px-2 py-0.5 rounded-full text-xs">100</span>
          )}
          {tab === 'Draft' && (
            <span className="ml-1 bg-gray-400 text-white px-2 py-0.5 rounded-full text-xs">15</span>
          )}
          {tab === 'Archive' && (
            <span className="ml-1 bg-gray-400 text-white px-2 py-0.5 rounded-full text-xs">45</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabFilter;